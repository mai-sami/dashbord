import React from 'react'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
function Statistics() {

    return (
        <div className="statistics">
            <div className="first">
                <div className="first__block">
                    <p className="p__p">الرصيد الحالي</p>
                    <div   className="green"  >
                    <ArrowUpwardIcon  className="icon" style={{ fontSize:22 }}/>

                    </div>
                </div>
                <div className="secand__block">
                    <h1 className="h1">12.50M SAR</h1>
                </div>

                <div className="therd__block">
                    <div className="therds__block">

                        <span className="span">السابق</span>
                        <span className="color">12.31M SAR</span>
                    </div>
                    <div className="therd__blocks">
                        <span className="span">الشهر الماضي</span>
                        <span className="color">11.50M SAR</span>
                    </div>
                </div>
            </div>
            <div className="secand">
                <Box sx={{ width: '90%' }}>
                    <Grid className="secands" container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <div className="divs">

                        <Grid className="grid" item xs={6}>
               

                            <div className="grid__block">
                                <p className="mac">المبيعات  </p>
                                <p className="greens">18.29K  </p>
                            </div>
                            <div className="drid__block">
                    <div className="therds__block">

                        <span className="span">السابق</span>
                        <span className="blue">12.31M SAR</span>
                    </div>
                    <div className="therd__blocks">
                        <span className="span">الشهر الماضي</span>
                        <span className="blue">11.50M SAR</span>
                    </div>
                    <div   className="green__blue" >
                 <ArrowUpwardIcon  className="icon" style={{ fontSize:22 }}/>
                        </div>

                </div>
            
                        </Grid>
                        <Grid className="grid" xs={6} >
                        <div className="grid__block">
                                <p className="mac">ذمم مدينة  </p>
                                <p className="yeloows"> 488.20K  </p>
                            </div>
                            <div className="drid__block">
                    <div className="therds__block">

                        <span className="span">السابق</span>
                        <span className="yeloow"> 423.20K   </span>
                    </div>
                    <div className="therd__blocks">
                        <span className="span">الشهر الماضي</span>
                        <span className="yeloow"> 378.20K</span>
                    </div>
                    <div   className="div___yeloow" >
                 <ArrowUpwardIcon  className="icon" style={{ fontSize:22 }}/>
                        </div>

                </div>
             
                        </Grid>
                        </div>
                        <br />
                        <div className="divs">
                            <Grid className="grid" xs={6}>
                            <div className="grid__block">
                                <p className="mac">المشتريات  </p>
                                <p className="greens">5.52K </p>
                            </div>
                            <div className="drid__block">
                    <div className="therds__block">

                        <span className="span">السابق</span>
                        <span className="blue">5.51K  </span>
                    </div>
                    <div className="therd__blocks">
                        <span className="span">الشهر الماضي</span>
                        <span className="blue"> 4.52K</span>
                    </div>
                    <div   className="green__blue" >
                 <ArrowUpwardIcon  className="icon" style={{ fontSize:22 }}/>
                        </div>

                </div>


                            </Grid>

                            <Grid className="grid" xs={6}>
                            <div className="grid__block">
                                <p className="mac">ذمم دائنة  </p>
                                <p className="reds">-70.46K  </p>
                            </div>
                            <div className="drid__block">
                    <div className="therds__block">

                        <span className="span">السابق</span>
                        <span className="red">-70.20K </span>
                    </div>
                    <div className="therd__blocks">
                        <span className="span">الشهر الماضي</span>
                        <span className="red"> -60.46K    </span>
                    </div>
                    <div   className="div___red" >
                 <ArrowUpwardIcon  className="icon" style={{ fontSize:22 }}/>
                        </div>

                </div>                            </Grid>
                        </div>
                    </Grid>

                </Box>
            </div>
        </div>
    )
}

export default Statistics
