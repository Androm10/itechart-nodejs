import { Request, Response } from 'express';

class TaskController {

    async getEmptyCarsInUse (req: Request, res: Response) {

        res.status(200).json({ type : 'success', body : cars});
    }

    async getCarsWithUnregisteredCard (req: Request, res: Response) {

        res.status(200).json({ type : 'success', body : cars});

    }

    async addCar (req: Request, res: Response) { 

        res.status(200).json({ type : 'success', body : car});
    }

    async setCarInService(req: Request, res: Response) {
      
        res.status(200).json({ type : 'success', body : cars});

    }

    async setCarOnParking(req: Request, res: Response) {

        res.status(200).json({ type : 'success', body : cars});
    }


    async deleteCarByVIN(req: Request, res: Response) {


        res.status(200).json({ type : 'success', body : true});
    }


}

export default new TaskController();