import './style.css'
import { header } from './src/components/header/header';
import { nav } from './src/components/nav/nav';
import { renderProjects } from './src/utils/renderfunctions';


header.innerHTML = nav();
renderProjects();