import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  imports: [],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  posts = [
    {
      title: "Ibuprofeno: Efecte antiinflamatori",
      subtitle: "",
      description: "L'ibuprofeno és un antiinflamatori no selectiu, és a dir, inhibeix tant les COX 1 com les COX 2. Al mercat existeixen alternatives menys empreades que limiten les implicacions gàstriques. Els omega 3 marins, EPA I DHA, actuen semblant, els mediadors proinflamatoris que es generen es formen a partir d'aquests greixos. Per la composició molecular que tenen, provoquen que els mediadors siguin menys potents, generan menor inflamació.",
      img: "https://instagram.fbcn13-1.fna.fbcdn.net/v/t51.29350-15/485230279_1149529703527203_299062767444415656_n.heic?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fbcn13-1.fna.fbcdn.net&_nc_cat=103&_nc_oc=Q6cZ2QEHGS5YNCMuVTJEbvDoIFv2ZILt8i2a_ZPQp9hyGcrd7dwiuTrtyptWbvTzZSCso1A&_nc_ohc=52FLXy68EmEQ7kNvgF2rEE_&_nc_gid=2fYHab9sX2sWyhESEoO8hw&edm=AONqaaQBAAAA&ccb=7-5&ig_cache_key=MzU5MTczNzE3MzUxMDAzMzMzMg%3D%3D.3-ccb7-5&oh=00_AYGNuLzXzh4UbQZ-MXDE8lRKwfuG9KwbDiLgdJc2BFAFkQ&oe=67E5A431&_nc_sid=4e3341"
    }
  ]
}
