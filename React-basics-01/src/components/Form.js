import './Form.css';

function Form(){
    return (
    <div>
<table> {/* Start of the table */}
<tr> {/* Table row for headers */}
                    <th>Company</th> {/* Header for Company column */}
                    <th>Contact</th> {/* Header for Contact column */}
                    <th>Country</th> {/* Header for Country column */}
                </tr>
  {/* First row of data */}              
  <tr>
                    <td>Alfreds Futterkiste</td> {/* Company name */}
                    <td>Maria Anders</td>        {/* Contact name */}
                    <td>Germany</td>             {/* Country name */}
  </tr>
  {/* Second row of data */}
  <tr>
                    <td>Centro comercial Moctezuma</td> {/* Company name */}
                    <td>Francisco Chang</td>               {/* Contact name */}
                    <td>Mexico</td>                        {/* Country name */}
  </tr>
</table>
</div>);
}

export default Form;

