import React from 'react'
import data from "../images/ConstantData";
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <section className="page_404 mx-auto m-4">
	<div className="container">
		<div className="row">	
		<div className="col-sm-12 ">
		<div className="col-sm-10 col-sm-offset-1  text-center">
		<div className="four_zero_four_bg">
                <img src={data.notfound} style={{ "boxShadow":"1px 2px 3px ","border":"2px solid black","borderRadius":"50%","height": "400px","background-position": "center"}}/>
			<h1 className="text-center ">404</h1>
		</div>
		
		<div className="contant_box_404">
		<h3 className="h2">
		Looks like you're lost
		</h3>
		
		<p>the page you are looking for is not available!</p>
        <Link className='btn btn-primary mb-3' to='/'>Go To Home</Link>
	</div>
		</div>
		</div>
		</div>
	</div>
</section>
  )
}

export default PageNotFound
