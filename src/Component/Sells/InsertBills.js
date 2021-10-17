import React from 'react'
import '../../Css/Client.css'

function InsertBills() {
    return (
        <div>
            <div className="reo">
                <input className="sameInsert" type="submit" value="اعتماد" />
                <input className="sameInserts" type="submit" value="حفظ" />
            </div>
            <div className="all__input">
                <div className="section">
                    <p>تاريخ الادخال</p>
                    <input className="insert__input" />
                </div>
                <div className="section">
                    <p>النوع</p>
                    <select className="select">
                        <option>نقد</option></select>    </div>
                <div className="section">
                    <p>الشركة</p>
                    <select className="select">
                        <option>أمازون</option></select>    </div>
                <div className="section">
                    <p>السنة المالية</p>
                    <select className="select">
                        <option>2021</option></select> 
                        
                                        </div>
                <div className="section">
                    <p>حساب</p>
                    <select className="select">
                        <option>اختر</option></select>   
                         </div>
                         
            </div>    
            
            
            
            
            <div className="all__input">

            <div className="section">
                    <p>سلسلة ترقيم الوثيقة</p>
                    <select className="selects">
                        <option>**** **** ***</option></select>    </div>
                <div className="section">
                    <p> دفع ل</p>
                    <input className="insert__inputs" />
                </div>
               
                <div className="section">
                    <p>عميل  </p>
                    <input className="insert__inputs" />
                </div>
                
                         
            </div>    
            
            
            
             
            <div className="all__input">

            <div className="section">
                    <p>رقم الشيك    </p>
                    <select className="selects">
                        <option>**** **** ***</option></select>    </div>
                <div className="section">
                    <p>  تاريخ الشيك  </p>
                    <input className="insert__inputs" />
                </div>
               
                <div className="section">
                    <p>تاريخ التحصيل  </p>
                    <input className="insert__inputs" />
                </div>
                
                         
            </div>    
            
            
                </div>
    )
}

export default InsertBills
