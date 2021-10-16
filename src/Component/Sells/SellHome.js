import React from 'react'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import '../../Css/Client.css'
import '../../Css/Home.css'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import Group from "../../images/Group.png"



 
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
function SellHome() {
    return (
        <div>
            <div className="sell">
                <p className="esll__p">مؤشرات المشتريات</p>
            </div>
            <div className="contant__All"> 

            <div className="contant"> 
            <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid className="gridsell" item xs={6}>
        <div className="grid__blockSll">
                                <p className="mac">المشتريات  </p>
                                <p className="greens">5.52K </p>
                            </div>
                            <div className="drid__block">
                    <div className="therds__block">

                        <span className="span">المدفوع</span>
                        </div>

                    <div className="therd__blocksSell">
                        <small className="sm__all ">55.6%  </small>
<progress className="prog" max="100" value={55}></progress>   
                 </div>
                     <div   className="green__blue" >
                 <ArrowUpwardIcon  className="icon" style={{ fontSize:22 }}/>
                        </div>

                </div>


         </Grid>
        <Grid className="gridsell" item xs={6}>
        <div className="grid__blockSll">
                                <p className="mac">أوامر الشراء  </p>
                                <p className="greens">0 </p>
                            </div>
                            <div className="drid__block">
                 
                    <div className="therd__blocks">
                        <span className="span">  لا يوجد بيانات لعرضها</span>
                     </div>
                   
                        <img className="im__g" src={Group} alt=" " />
                      

                </div>

         </Grid>
        
     
      </Grid>
    </Box>
    </div>
    
    <div className="contants "> 
            <Box sx={{ width: '100%' }}>
      <Grid container spacing={2}>
      <Grid className="con__tact"   xs={1} md={11}>


<div  className="all__items">
<p className="all__count">مجموع طلبات نقل المواد</p>
<p className="num">0</p>
</div>
<div  className="all__items">
<p className="all__count"> مجموع طلبات شراء المواد      </p>
<p className="num">0</p>
</div>
  </Grid>
        
      
      </Grid>
    </Box>
    </div>
    </div>
    <br />
    <div className="head__secand">
    <div className="head">
                    <p className="P__P__P">      اجمالي المشتريات مقابل اجمالي التسديد</p>
                    <div className="left__button__AllSell" >

                        <div className="left__buttonSell" >
                            <div className="coloer__divs">
                            </div>
                            <p className="textsSell"> تم تحرير الفواتير</p>

                        </div>

                        <div className="left__buttonSell" >
                            <div className="coloer__div">
                            </div>
                            <p className="texts__change">  مسدد</p>


                        </div>
                        <select className="slectsell">
                            <option>الشهر الحالي</option>
                            <option>الشهر السابق</option>

                        </select>
                    </div>

                </div>
    </div>
        </div>
    )
}

export default SellHome
