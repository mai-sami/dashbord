import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';



var Bills = [{id:4567, type: " مي سامي       ", count:"5667",invoice:"67890" ,bill:"2323  R.S"  },
{id:4567, type: " مي سامي       ", count:"5667",invoice:"67890" ,bill:"2323  R.S"  },
{id:4567, type: " مي سامي       ", count:"5667",invoice:"67890" ,bill:"2323  R.S"  },
{id:4567, type: " مي سامي       ", count:"5667",invoice:"67890" ,bill:"2323  R.S"  },
{id:4567, type: " مي سامي       ", count:"5667",invoice:"67890" ,bill:"2323  R.S"  },

];

function Billsُxchange() {
    return (
        <div classNAme="client">
        <div className="invoices__div">
<div className="search">
 
<input className="same" type="submit" value="حدف" />
 

<input  className="same" type="submit" value="الغاء" />
 <input  className="same" type="submit" value="اعتماد" />
 <Link className="Link"  to="/insert"> 

<input  className="new" type="submit" value="جديد" />
</Link>
<div className="header__searchs">
<input  placeholder="ابحث عن عميل" className="header__searchInputs" />
<SearchIcon className="header__searchIcon"/>
</div>
 

</div>
<p className="cli__Ps"> قائمة سندات الصرف  </p>

        </div>
        <table id="table">



        <tr className="th">
        <th className="check"><input type="checkbox" />معرف</th>

<th className="tab">النوع</th>
<th className="tab"> اجمالي السند  </th>
<th className="tab">  المدفوع الفواتير </th>
<th className="tab">الرصيد </th>

</tr>
{Bills.map((bills) => (

<tr>
<td className="datass"><input className="ch" type="checkbox" />{bills.id}</td>

<td className="datas">{bills.type}</td>
<td className="datas">{bills.count}</td>
<td className="datas">{bills.invoice}</td>
<td className="datas">{bills.bill}</td>
</tr>
  ))}
</table>

    </div>
    )
}

export default Billsُxchange
