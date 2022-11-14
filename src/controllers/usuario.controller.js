import { getConnection } from "./../database/database";

const getUsuarios= async (req,res)=>{
    try {
        const connection=await getConnection();
        const result=await connection.query("select * from usuario where visible_u=1");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const getUsuario= async (req,res)=>{
    try {
        const connection=await getConnection();
        const {id_u}=req.params;
        const result=await connection.query("select * from usuario where id_u=? and visible_u=1",id_u);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const postUsuario=async(req,res)=>{
    try {
        const {nombre_u,ap_u,am_u,edad_u,tipo_u,sexo_u,tel1_u,correo_u,password_u,cedula_u,visible_u}=req.body;
        const usuario={nombre_u,ap_u,am_u,edad_u,tipo_u,sexo_u,tel1_u,correo_u,password_u,cedula_u,visible_u}; 
        const connection=await getConnection();
        const result=await connection.query("insert into usuario set ?",usuario);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const deleteUsuario= async (req,res)=>{
    try {
        const connection=await getConnection();
        const {id_u}=req.params;
        const result=await connection.query("update usuario set visible_u=0 where id_u=?",id_u);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const updateUsuario= async (req,res)=>{
    try {
        const connection=await getConnection();
        const {id_u}=req.params;
        const {nombre_u,ap_u,am_u,edad_u,tipo_u,sexo_u,tel1_u,correo_u,password_u,visible_u}=req.body;
        const usuario={id_u,nombre_u,ap_u,am_u,edad_u,tipo_u,sexo_u,tel1_u,correo_u,password_u,visible_u}; 
        const result=await connection.query("update usuario set ? where id_u=?",[usuario,id_u]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const loginUsuario=async(req,res)=>{
    try {
        const connection=await getConnection();
        const {id_u,password_u}=req.params;
        const result=await connection.query("select * from usuario where id_u=? and password_u=? and visible_u=1",[id_u,password_u]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}


export const methods={
    getUsuarios,
    postUsuario,
    getUsuario,
    deleteUsuario,
    updateUsuario,
    loginUsuario,
}