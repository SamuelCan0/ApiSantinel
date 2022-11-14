import { getConnection } from "./../database/database";

const getPacientes= async (req,res)=>{
    try {
        const connection=await getConnection();
        const result=await connection.query("select * from paciente where visible_p=1");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const getPaciente= async (req,res)=>{
    try {
        const connection=await getConnection();
        const {id_p}=req.params;
        const result=await connection.query("select * from paciente where id_p=? and visible_p=1",id_p);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const searchExpediente=async(req,res)=>{
    try {
        const connection=await getConnection();
        const {nombre_p}=req.params;
        const result=await connection.query("select * from paciente where (nombre_p like ?) and visible_p=1",nombre_p);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const postPaciente=async(req,res)=>{
    try {
        const {
            id_p,
            nombre_p,
            ap_p,
            am_p ,
            edad_p ,
            estadoC_p,
            fecha_nacim_p ,
            sexo_p ,
            fecha_registro_p ,
            calle_p ,
            num_p ,
            colonia_p ,
            municipio_p ,
            estadoF_p ,
            tel1_p ,
            tel2_p ,
            correo_p ,
            alergias_p ,
            nss_p ,
            enf_cro_p,
            visible_p,
        }=req.body;
        const paciente={
            id_p,
            nombre_p,
            ap_p,
            am_p ,
            edad_p ,
            estadoC_p,
            fecha_nacim_p ,
            sexo_p ,
            fecha_registro_p ,
            calle_p ,
            num_p ,
            colonia_p ,
            municipio_p ,
            estadoF_p ,
            tel1_p ,
            tel2_p ,
            correo_p ,
            alergias_p ,
            nss_p ,
            enf_cro_p,
            visible_p,
        }; 
        const connection=await getConnection();
        const result=await connection.query("insert into paciente set ?",paciente);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const deletePaciente= async (req,res)=>{
    try {
        const connection=await getConnection();
        const {id_p}=req.params;
        const result=await connection.query("update paciente set visible_p=0  where ?=id_p",id_p);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const updatePaciente= async (req,res)=>{
    try {
        const connection=await getConnection();
        const {id_p}=req.params;
        const {
            nombre_p,
            ap_p,
            am_p ,
            edad_p ,
            estadoC_p,
            fecha_nacim_p ,
            sexo_p ,
            fecha_registro_p ,
            calle_p ,
            num_p ,
            colonia_p ,
            municipio_p ,
            estadoF_p ,
            tel1_p ,
            tel2_p ,
            correo_p ,
            alergias_p ,
            nss_p ,
            enf_cro_p,
            visible_p
        }=req.body;
        console.log(req.body);
        const paciente={
            id_p,
            nombre_p,
            ap_p,
            am_p ,
            edad_p ,
            estadoC_p,
            fecha_nacim_p ,
            sexo_p ,
            fecha_registro_p ,
            calle_p ,
            num_p ,
            colonia_p ,
            municipio_p ,
            estadoF_p ,
            tel1_p ,
            tel2_p ,
            correo_p ,
            alergias_p ,
            nss_p ,
            enf_cro_p,
            visible_p,
        };  
        const result=await connection.query("update paciente set ? where id_p=?",[paciente,id_p]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};


export const methods={
    getPaciente,
    getPacientes,
    postPaciente,
    deletePaciente,
    updatePaciente,
    searchExpediente,
}