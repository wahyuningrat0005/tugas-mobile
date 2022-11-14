import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();
export const getProducts = async (req, res) =>{

    try {
        const response = await prisma.product.findMany();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getProductsById = async (req, res) => {

    try {
        const response = await prisma.product.findUnique({
            where:{
                id: Number(req.params.id)
            }
        });
        res.status(200).json(response);
       
    } catch (error) {
        res.status(404).json({msg: error.message});
    }
}

export const createProduct = (req, res) => {

}

export const updateProduct = (req, res) => {

}

export const deleteProduct = (req, res) => {

}