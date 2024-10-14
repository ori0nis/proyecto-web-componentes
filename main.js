import './style.css'
import { header } from './src/components/header/header';
import { nav } from './src/components/nav/nav';
import { renders } from './src/utils/renderfunction';
import { footer, footerContent } from './src/components/footer/footer';


header.innerHTML = nav();
renders();
footer.innerHTML = footerContent();