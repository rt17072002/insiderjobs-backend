import mongoose from "mongoose"
import Job from "./models/Job.js";
import { jobsData } from "../client/src/assets/assets.js";

const jobs = jobsData;

console.log(jobs)

mongoose.connect(process.env.MONGODB_URI+"/job-portal").then(()=>console.log("mongodb connected"))

// const insertJobs = async (jobs)=>{
//     const data = await Job.insertMany(jobs);
//     console.log(data);
// }

 
