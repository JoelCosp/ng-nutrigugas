import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog',
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  posts = [
    {
      title: "Ibuprofeno: Efecte antiinflamatori",
      subtitle: "",
      description: "L'ibuprofeno és un antiinflamatori no selectiu, és a dir, inhibeix tant les COX 1 com les COX 2. Al mercat existeixen alternatives menys empreades que limiten les implicacions gàstriques. Els omega 3 marins, EPA I DHA, actuen semblant, els mediadors proinflamatoris que es generen es formen a partir d'aquests greixos. Per la composició molecular que tenen, provoquen que els mediadors siguin menys potents, generan menor inflamació.",
      img: "https://dynamic.brandcrowd.com/template/preview/design/9f9258dc-d0a6-43eb-9a9a-93f74a00473d/920b26e1-cff9-4447-b49c-970272b1da40?v=4&designTemplateVersion=1&logoTemplateVersion=4&size=design-preview-tall-2x"
    },
    {
      title: "Remolatxa: Hipertensió Arterial i Funció Cognitiva",
      subtitle: "",
      description: "La remolacha és una hortalissa rica en nitrats, que tenen una biodisponibilitat alta, convertint-se en òxid nítric (ON) al cos. L'ON té un paper essencial en la salut vascular, ja que promou la vasodilatació, ajudant a reduir la pressió arterial. Aquest efecte és beneficiós en persones amb hipertensió arterial. A més, diversos estudis han indicat que el suc de remolacha té un potencial antioxidant superior en comparació amb altres sucs de verdures, tot i que aquests resultats són més significatius en condicions in vitro (sobre cèl·lules de laboratori), per la qual cosa cal més investigació per confirmar-los en humans. En pacients ja tractats farmacològicament, els efectes poden ser més moderats o difícils de detectar. Pel que fa a la funció cognitiva, els nitrats de la remolacha també mostren beneficis. Amb l’edat, el flux sanguini cerebral disminueix, la qual cosa està relacionada amb trastorns neurodegeneratius com l'Alzheimer i amb un deteriorament cognitiu general. Els estudis han mostrat que una dieta rica en nitrats, incloent el suc de remolacha, pot millorar la circulació cerebral, especialment en àrees del cervell com la còrtex frontal, responsable de processos cognitius com la memòria i la funció executiva. En alguns estudis, fins i tot una sola ingesta de 500 ml de suc de remolacha ha millorat el flux sanguini cerebral, reduint la resistència arterial cerebrovascular.",
      img: "https://dynamic.brandcrowd.com/template/preview/design/9f9258dc-d0a6-43eb-9a9a-93f74a00473d/920b26e1-cff9-4447-b49c-970272b1da40?v=4&designTemplateVersion=1&logoTemplateVersion=4&size=design-preview-tall-2x"
    },
    {
      title: "L'alcohol: Ressaca. Prevenció i càncer",
      subtitle: "",
      description: "L'etanol, el tipus d’alcohol que consumim, és 20 vegades menys tòxic que l'acetaldehid, que és el producte generat durant la seva metabolització al cos i el principal responsable dels efectes perjudicials de l'alcohol sobre l'organisme. La velocitat a la qual el cos transforma l'etanol en acetaldehid depèn de l'expressió del citocrom CYP2E1, un enzim clau en aquest procés. Si tens una baixa expressió enzimàtica, generaràs menys acetaldehid i, per tant, tindràs menor probabilitat de patir malalties com el càncer associades al consum d'alcohol. Això explica per què algunes persones són més propenses a desenvolupar aquestes condicions en funció de la seva genètica. La ressaca, també coneguda mèdicament com a veisàlgia, no es caracteritza per paràmetres metabòlics concrets. Es defineix principalment pels símptomes físics i mentals que apareixen després del consum d'alcohol, com el malestar general, l’apatia o el major risc d'accidents. Un dels factors clau que contribueixen a la ressaca és la deshidratació causada per l'efecte diürètic de l'alcohol. Això es deu a l'increment en la producció de renina, una hormona amb acció diürètica, i a l'alteració de la percepció de la set, fet que provoca que les persones no consumeixin prou aigua mentre beuen alcohol. A més, l’alcohol augmenta la pressió arterial i accelera la pèrdua de líquids mitjançant l’orina. Els estudis apunten que beure aigua durant el consum d'alcohol és la millor manera de reduir els símptomes de la ressaca. Tot i això, els suplements de vitamines i minerals destinats a alleugerir la resaca no tenen un suport científic sòlid. Malgrat això, alguns estudis suggereixen que el ginseng vermell coreà podria ajudar a mitigar els símptomes i augmentar lleugerament la velocitat de metabolització de l'alcohol, però es tracta d'investigacions preliminars amb mostres petites. Segons l'Organització Mundial de la Salut (OMS), el consum d'alcohol no hauria de superar els 30 g al dia per als homes i els 20 g al dia per a les dones. Per posar-ho en context, 10 g d'alcohol equivalen aproximadament a 200 ml de cervesa al 5% de grau alcohòlic per cada 100 ml.",
      img: "https://dynamic.brandcrowd.com/template/preview/design/9f9258dc-d0a6-43eb-9a9a-93f74a00473d/920b26e1-cff9-4447-b49c-970272b1da40?v=4&designTemplateVersion=1&logoTemplateVersion=4&size=design-preview-tall-2x"
    },
    {
      title: "Dèficit de Vitamina D: Lal latitud i l'hivern",
      subtitle: "",
      description: "La vitamina  D es coneix tradicionalment per la seva funció a nivell ossi i absorció de calci, però és tant el seu potencial que es considera una prohormona, el seu dèficit està relacionat amb el càncer, fractures òssies, depressió, demència, malalties infeccioses entre d’altres. La prevalença de dèficit varia d’entre el 30% al 90% pels diferents grups poblacionals espanyols, essent els ancians institucionalitzats (90%), dones embarassades (50%) o adolescents (61%) un exemple. La síntesi de vitamina D es realitza a través de la pell, es poden suplir entre el 80% i el 100% dels requeriments diaris a partir d’això, complementant-ho amb l’alimentació, essent l’oli de fetge de bacallà el més ric, entre altres aliments com l’ou, la llet o altres peixos, principalment. El dèficit de vitamina D augmenta durant els mesos d’hivern i es redueix a l’estiu, el factor principal és la menor exposició solar i la variació de la inclinació de la terra, en les latituds superiors a 35°, els rajos UVB es filtren a l'atmosfera i arriben en menor grau, essent als 50° la producció nul·la pràcticament. La suplementació amb vitamina D reverteix el dèficit de vitamina D i millora els nivells de la població, tal com s’observa en països com Noruega, Finlàndia o Suècia. Es necessiten 2 h exposant el 10% del cos a l’hivern per generar 1.000 ui (Requeriment diari), 7 minuts al juny i 30 minuts a l’octubre (A major zona exposada, menor temps). La suplementació amb (800 ui - 5.000 ui) diàries milloren el dèficit i redueixen el risc de fractura òssia en població major. No obstant això, en població molt deficitària, dosificacions superiors (10.000 - 50.000 ui) serien necessàries.",
      img: "https://dynamic.brandcrowd.com/template/preview/design/9f9258dc-d0a6-43eb-9a9a-93f74a00473d/920b26e1-cff9-4447-b49c-970272b1da40?v=4&designTemplateVersion=1&logoTemplateVersion=4&size=design-preview-tall-2x"
    }
  ]
}
