import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient();

export async function DELETE(request:NextRequest, {params} : {params:{id:string}})
{
    const {id} = params;

    try {

        await prisma.category.delete({
            where:{
                id
            }
        }) 

        return NextResponse.json({message:"Success"}, {status:200});

        
    } catch (error) {
        return NextResponse.json({error:"Failed"}, {status:500});
    }
}