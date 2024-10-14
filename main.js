import './style.css'
import { header } from './src/components/header/header';
import { nav } from './src/components/nav/nav';
import { renders } from './src/utils/renderfunction';


header.innerHTML = nav();
renders();