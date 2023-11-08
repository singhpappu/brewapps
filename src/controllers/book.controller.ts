import { Prisma } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import prisma from "../prisma/prisma.db";
import { query } from 'express-validator';

class BookController {


    public store = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            await prisma.book.create({
                data: req.body
            })
            res.status(201).json({ book: req.body, status: 'Book created successfully.' });

        } catch (error) {
            res.status(400).json({ data: error, status: 'error' });
        }
    };

    public listBooks = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            let books = await prisma.book.findMany();
            res.status(200).json({ data: books, status: 'Books fetched successfully' });

        } catch (error) {
            res.status(400).json({ data: error, status: 'error' });
        }
    };

    public find = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            let book = await prisma.book.findUnique({
                where: {
                    id: req.params.id
                }
            });

            res.status(200).json({ data: book, status: 'Book detail fetched successfully' });
        } catch (error) {
            res.status(400).json({ data: error, status: 'error' });
        }
    };


    public deleteBook = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {

            let book = await prisma.book.delete({
                where: {
                    id: req.params.id
                }
            });

            res.status(201).json({ data: book, status: 'Book deleted successfully' });
        } catch (e) {
            res.status(400).json({ data: e, status: 'error' });
        }
    };

}

export default BookController;