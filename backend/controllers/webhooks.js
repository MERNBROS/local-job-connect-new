import { Webhook } from "svix";
import User from "../models/User.js";

// API controller function to manage clerk user with database

export const clerkWebhooks = async (req, res) => {
  try {
    // CREATE A SVIX INSTANCE WITH CLERK WEBHOOK SECRET
    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    // veriging headers
    await whook.verify(JSON.stringify(req.body), {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    });

    // getting data from requeat body

    const { data, type } = req.body;

    // switch cases for different events

    switch (type) {
      case "user.created": {

        const userData = {
            _id:data.id,
            email:data.email_addresses[0].email_addresses,
            name: data.first_name + " " + data.last_name,
            image: data.image_url,
            resum: " "
        }
        await User.create(userData)
        res.json({})
        break;


      }
      case "user.updated": {

        const userData = {
           
            email:data.email_addresses[0].email_addresses,
            name: data.first_name + " " + data.last_name,
            image: data.image_url,
            
        }

        await User.findByIdAndUpdate(data.id,userData)
        res.json({})
        break;



      }
      case "user.deleted": {

        await User.findByIdAndDelete(data.id)
        res.json({})
        break;


      }
      default:
        break;
    }
  } catch (error) {

    console.log(error.message);
    res.json({success:false,message: 'Webhooks error'})

  }
};
