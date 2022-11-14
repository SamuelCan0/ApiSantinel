import { getConnection } from "./../database/database";

const getConsultasPaciente= async (req,res)=>{
    try {
        const connection=await getConnection();
        const {id_p1}=req.params;
        const result=await connection.query("select id_c,fecha_c,nota_medica_c,sig_cita_c, concat(nombre_u,' ',ap_u,' ',am_u) medico from consulta inner join usuario where id_p1=? and id_u=id_u1 order by fecha_c desc",id_p1);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const getConsultas=async(req,res)=>{
    try {
        const connection=await getConnection();
        const result=await connection.query("select * from consulta");
        res.json(result);
    } catch (error) {
        res.status(500),
        res.send(error.message);
    }
}


const postConsulta=async(req,res)=>{
    try {
        const {id_p1,id_u1,fecha_c,peso_c,tall_c,imc_c,estadoN_c,fc_c,fr_c,temp_c,ta_c,spo2_c,gc_c,nota_enferm_c,nota_medica_c,sig_cita_c}=req.body;
        const consulta={id_p1,id_u1,fecha_c,peso_c,tall_c,imc_c,estadoN_c,fc_c,fr_c,temp_c,ta_c,spo2_c,gc_c,nota_enferm_c,nota_medica_c,sig_cita_c}; 
        const connection=await getConnection();
        const result=await connection.query("insert into consulta set ?",consulta);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const methods={
    getConsultasPaciente,
    postConsulta,
    getConsultas,
}