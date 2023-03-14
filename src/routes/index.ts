import { Router } from 'express';
import {readdirSync} from 'fs';

const PATH_ROUTER = `${__dirname}`;
const router = Router();

//? funcion para remover el indicador de tipo de archivo
const cleanFileName = (fileName:string) =>{
    //? con split hacemos que apartir del "." y son shift tomamos la parte inicial 
    return fileName.split('.').shift() //TODO auth
}


//? leemos el direcctorio de manera asincroma
readdirSync(PATH_ROUTER).filter((fileName)=>{ 
    
    
   //? concatenamos la ruta 
    const cleanName = cleanFileName(fileName)
    //? Condicion para que descarte el archivo index como una ruta
    if ( cleanName !=='index'){
        //? Importanción dinamica pedimos que utilice / al inicio, pedimos nombre del archivo 
        import(`./${cleanName}`).then((moduleRouter)=>{
            router.use(`${cleanName}`, moduleRouter.router)
        })
    }
})


export {router};