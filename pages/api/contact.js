import clientPromise from '../../lib/mongodb'

export default async function handler(req, res){
  if(req.method !== 'POST') return res.status(405).end()
  const { name, email, message, projectType, description, budget, timeline } = req.body
  
  const isProjectInquiry = projectType && description && budget && timeline;
  
  if(!name || !email || (!message && !isProjectInquiry)) {
    return res.status(400).json({error:'Missing fields'})
  }

  // Fallback mode — MongoDB not configured
  if (!clientPromise) {
    console.log('Contact form submission (no DB):', { name, email, message, projectType })
    return res.status(200).json({ ok: true, note: 'Message received (DB not configured)' })
  }

  try{
    const client = await clientPromise
    const db = client.db(process.env.MONGODB_DB || 'portfolio')
    const collection = db.collection('messages')
    
    let document = { 
      name, 
      email, 
      createdAt: new Date() 
    };
    
    if (isProjectInquiry) {
      document = {
        ...document,
        type: 'projectInquiry',
        projectType,
        description,
        budget,
        timeline
      };
    } else {
      document = {
        ...document,
        type: 'contact',
        message
      };
    }
    
    await collection.insertOne(document)
    return res.status(200).json({ok:true})
  }catch(err){
    console.error(err)
    return res.status(500).json({error:'DB error'})
  }
}
import clientPromise from '../../lib/mongodb'

export default async function handler(req, res){
  if(req.method !== 'POST') return res.status(405).end()
  const { name, email, message, projectType, description, budget, timeline } = req.body
  
  // Check if this is a project inquiry or regular contact message
  const isProjectInquiry = projectType && description && budget && timeline;
  
  if(!name || !email || (!message && !isProjectInquiry)) {
    return res.status(400).json({error:'Missing fields'})
  }

  try{
    const client = await clientPromise
    const db = client.db(process.env.MONGODB_DB)
    const collection = db.collection('messages')
    
    let document = { 
      name, 
      email, 
      createdAt: new Date() 
    };
    
    if (isProjectInquiry) {
      // This is a project inquiry
      document = {
        ...document,
        type: 'projectInquiry',
        projectType,
        description,
        budget,
        timeline
      };
    } else {
      // This is a regular contact message
      document = {
        ...document,
        type: 'contact',
        message
      };
    }
    
    await collection.insertOne(document)
    return res.status(200).json({ok:true})
  }catch(err){
    console.error(err)
    return res.status(500).json({error:'DB error'})
  }
}