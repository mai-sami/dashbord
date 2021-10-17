import React from 'react'

function Insertsupplier() {
    return (
        <div>

<div className="invoices__div__reos">
<div className="search">
 
<input  className="new" type="submit" value="جديد" />
 

</div>
<p className="cli__Ps">   اضافة مورد  </p>

        </div>
            
            <div className="all__inputSubler">
                <div className="section">
                    <p>اسم المورد  </p>
                    <input className="insert__inputSell" />
                </div>
               <div className="section">
                    <p>نوع المورد</p>
                    <select className="selectsSell">
                        <option>نقد</option></select>    </div>
                 
                         
            </div>    
            
            
            
            
            <div className="all__inputSubler">

            <div className="section">
                    <p>  شركة</p>
                    <select className="selectsSuppl">
                        <option>**** **** ***</option></select>    </div>
                <div className="section">
                    <p>الرقم الضريبي</p>
                    <input className="insert__inputsSupp" />
                </div>
               
                <div className="section">
                    <p>العملة الافتراضية  </p>
                    <input className="insert__inputsSupp" />
                </div>
                
                         
            </div>    
            
             
            <div className="all__inputSubler">
            <div className="section">
                    <p>  أيام التأخير</p>
                    <input className="insert__inputsSupp" />
                </div>
                <div className="section">
                    <p>تفاصيل المورد  </p>
                    <input className="insert__inputsSupp" />
                </div>
               
                <div className="section">
                    <p>  موقع الانترنت  </p>
                    <input className="insert__inputsSupp" />
                </div>
                
                         
            </div>   
            
             
           
            
            
                </div>
    )
}

export default Insertsupplier
