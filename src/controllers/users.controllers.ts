import { Request, Response } from "express";

const getRequest = (req: Request, res: Response)=>{
    res.json({getWorking: true})
}

const postRequest = (req: Request, res: Response)=>{
    res.send({postWorking: true})
}

const putRequest = (req: Request, res: Response)=>{
    res.json({putWorking: true})
}

const deleteRequest = (req: Request, res: Response)=>{
    res.json({deleteWorking: true})
}

export  {
    getRequest,
    postRequest,
    putRequest,
    deleteRequest
}