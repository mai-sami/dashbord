import React from 'react'
import SearchIcon from '@material-ui/icons/Search';

var Invoice = [{id:4567, name: " مي سامي       ", count:"5667",countAll:"67890",value:45  },
{id:45673, name: " مي سامي       ", count:"5667",countAll:"67890",value:95  },
{id:45699997, name: " مي سامي       ", count:"5667",countAll:"67890",value:75  },
{id:4567, name: " مي سامي       ", count:"5667",countAll:"67890",value:25  },                ];
function Invoices() {
    return (
        <div classNAme="client">
        <div className="invoices__div">
<div className="search">
<input className="same" type="submit" value="حدف" />

<input  className="same" type="submit" value="الغاء" />
 <input  className="same" type="submit" value="اعتماد" />
 
<input  className="new" type="submit" value="جديد" />
 
<div className="header__searchs">
<input  placeholder="ابحث عن عميل" className="header__searchInputs" />
<SearchIcon className="header__searchIcon"/>
</div>
 

</div>
<p className="cli__Ps"> قائمة فاتورة شراء  </p>

        </div>
        <table id="table">



        <tr className="th">
        <th className="check"><input type="checkbox" /></th>

<th className="tab">الاسم</th>
<th className="tab">المجموع الاجمالي</th>
<th className="tab">المبلغ المعلق </th>
<th className="tab">مدفوع </th>

</tr>
{Invoice.map((invoice) => (

<tr>
<td className="datass"><input className="ch" type="checkbox" />{invoice.id}</td>

<td className="datas">{invoice.name}</td>
<td className="datas">{invoice.count}</td>
<td className="datas">{invoice.countAll}</td>
<td className="datas"><progress className="progs" max="100" value={invoice.value}></progress>   
</td>
</tr>
  ))}
</table>

    </div>
    )
}

export default Invoices
