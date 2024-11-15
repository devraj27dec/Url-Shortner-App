import * as React from 'react';
import FormContainer from '../FormContainer/FormContainer';
import { UrlData } from '../interface/UrlData';
import axios from 'axios';
import { serverUrl } from '../../helpers/Constants';
import DataTable from '../DataTable/DataTable';



const Container = () => {
  const [data , setData ] = React.useState<UrlData[]>([]);
  const [reload , setReload ] = React.useState<boolean>(false);

  const updateReloadState = ():void => {
    setReload(true)
  }

  const fetchTableData = async() => {
    const response = await axios.get(`${serverUrl}/shortUrl`);
    console.log(" The Response from server", response);
    setData(response.data);
    setReload(false)
    console.log("Data" , data);
    
  }

  React.useEffect(() => {
    fetchTableData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[reload])  
  return (
    <>
      <FormContainer updateReloadState={updateReloadState} /> 
      <DataTable updateReloadState={updateReloadState} data={data}/>
    </>
  );
}

export default Container;