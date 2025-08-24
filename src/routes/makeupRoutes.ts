import { Router, Request, Response } from "express";

const router = Router();

interface Makeup {
    id: number;
    drugStore: boolean;
    brand: string;
    prices: number;
    name: string;
}

const makeup: Makeup[] = [
    { id: 1, drugStore: true, brand: "Maybelline", prices: 11.99, name: "Fit Me Matte + Poreless Powder" },
    { id: 2, drugStore: true, brand: "Maybelline", prices: 10.99, name: "Fit Me Conealer" },
    { id: 3, drugStore: true, brand: "L'Oreal", prices: 20.99, name: "True Match Tint Serum" },
    { id: 4, drugStore: true, brand: "L'Oreal", prices: 18.99, name: "Infallible Up to 32 Hour Fresh Wear Foundation" },
    { id: 5, drugStore: true, brand: "e.l.f. Cosmetics", prices: 8, name: "Hydrating Camo Concealer" },
    { id: 6, drugStore: true, brand: "e.l.f. Cosmetics", prices: 15, name: "Halo Glow Liquid Filter Foundation" },
    { id: 7, drugStore: true, brand: "e.l.f. Cosmetics", prices: 9, name: "Soft Glam Satin Foundation" },
    { id: 8, drugStore: false, brand: "Bare Minerals", prices: 42, name: "Matte Foundation Powder" },
    { id: 9, drugStore: false, brand: "NARS", prices: 32, name: "Radiant Creamy Concealer" },
]

// get makeup list
router.get("/makeup", (req: Request, res: Response) => {
    res.json(makeup);
});

// get specific makeup item (by id)
router.get("/makeup/:id", (req: Request, res: Response) => {
    const makeupId = parseInt(req.params.id!); //which way is better?
    //res.send(req.params.id!)
    const makeupItem = makeup.find((item) => item.id === makeupId);
    if (makeupItem) {
        res.json(makeupItem);
    } else {
        res.status(404).json({ message: "Makeup item not found" });
    }
});

// create/add new makeup item
router.post("/makeup", (req: Request, res: Response) => {
    const newMakeup: Makeup = {
        id: makeup.length + 1,
        drugStore: req.body.drugStore,
        brand: req.body.brand,
        prices: req.body.prices,
        name: req.body.name,
    }
    makeup.push(newMakeup);
    res.status(201).json(newMakeup);
});

// update makeup item (by id)
router.put("/makeup/:id", (req: Request, res: Response) => {
    const getId = req.params.id
    if (getId) {
        const makeupId = parseInt(req.params.id!) //! tells computer that it won't be null (like an override)
    } else {
        res.status(404).json({ message: "Makeup not found"});
    }
    
})

// delete makeup item (by id)
router.delete("/makeup/:id", (req: Request, res: Response) => {
    const makeupId = parseInt(req.params.id!);
    const makeupIndex = makeup.findIndex(b => b.id === makeupId);
    if (makeupIndex !== -1) {
        makeup.splice(makeupIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).json({ message: "Error 404. Makeup not found."})
    }
})

export default router;