import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import '../../Css/Client.css'
var Clients = [{ name: " مي سامي       ", city:"10.99.76",phone:90432146,  },
{ name: " مي سامي       ", city:"10.99.76",phone:9034322221,  }
                ];
function Client() {
    return (
        <div classNAme="client">
            <div className="client__div">
 <div className="search">
<div className="header__searchs">
<input  placeholder="ابحث عن عميل" className="header__searchInputs" />
<SearchIcon className="header__searchIcon"/>
</div>
</div>
<p className="cli__P">قائمة العملاء</p>

            </div>
            <table id="customers">
 
 
  
            <tr className="th">
            <th className="check"><input type="checkbox" /></th>

    <th className="name">الاسم</th>
    <th className="name">المدينة</th>
    <th className="name">رقم الجوال</th>

  </tr>
  {Clients.map((clients) => (

  <tr>
  <td className="check"><input type="checkbox" /></td>

    <td className="data">{clients.name}</td>
    <td className="data">{clients.city}</td>
    <td className="data">{clients.phone}</td>
  </tr>
      ))}
</table>

        </div>
    )
}

export default Client
