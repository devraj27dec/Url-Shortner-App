import express from 'express';
import UrlModel from '../models/shortUrl';

export const createUrl = async(req: express.Request , res: express.Response)=> {
    try {
        const {fullUrl } = req.body;
        const UrlFound = await UrlModel.find({fullUrl})
        
        if(UrlFound.length > 0){
            res.status(409);
            res.send(UrlFound);
        }else {
            const shortUrl = await UrlModel.create({fullUrl});
            res.status(201).send(shortUrl)
        }
    }catch (error) {
        res.status(500).send({message: "Something went wrong!"})
    }

}
export const getAllUrl = async(req: express.Request , res: express.Response)=> {
    try {
        const shortUrls = await UrlModel.find().sort({createdAt: -1});
        if(shortUrls.length < 0) {
            res.status(400).send({message: "Short Urls not found!"});
        }else {
            res.status(200).send(shortUrls);
        }
    } catch (error) {
        res.status(500).send({message: "Something went wrong!"})   
    }
}
export const getUrl = async(req: express.Request , res: express.Response)=> {
    try {
        const shortUrl = await UrlModel.findOne({shortUrl: req.params.id});
        if(!shortUrl){
            res.status(404).send({ message: "Full Url not found!" });
        }
        else {
            shortUrl.clicks++;
            shortUrl.save();
            res.redirect(`${shortUrl.fullUrl}`)
        }
    } catch (error) {
        res.status(500).send({message: "Something went wrong!"})
    }
}
export const deleteUrl = async(req: express.Request , res: express.Response)=> {

    try {
        const shortUrl = await UrlModel.findByIdAndDelete({_id : req.params.id})
        if(shortUrl){
            res.status(200).send({ message: "Requested URL succesfully deleted!" });
        }
        
    } catch (error) {
        res.status(500).send({ message: "Something went wrong!" });
    }
    
}