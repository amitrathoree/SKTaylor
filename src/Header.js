import logo from  '..//src/images/logoe.jpg';
import Stitch from '..//src/images/tailor.jpg';
import login from '..//src/images/person.png';

function Header (){
	return (
<header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
       <img src={logo} style={{width:"120px"}}></img>
      
    </a>
    <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      <a class="mr-5 hover:text-gray-900">Traditional</a>
      <a class="mr-5 hover:text-gray-900">Formals</a>
      <a class="mr-5 hover:text-gray-900">Casuals</a>
      <a class="mr-5 hover:text-gray-900">Repairs</a>
      <img src={Stitch} style={{width:"120px", marginLeft:"210px", height:"150px"}}></img>
    </nav>
    <img src={login} style={{width:"60px"}}></img>
  </div>
  
</header>

);
	
}

export default Header;