import React, { Component } from 'react';
class ListMenuUtama  extends Component {
 render() {
   return (
     <div>
      <h1>
       <center>selamat datang di warung nusantara</center>
      </h1>
    <center>
      <img src={this.props.gambar1} alt="masakaan nusantara" width="600" />
    </center>

      </div>
   );
 }
}

export default ListMenuUtama;
