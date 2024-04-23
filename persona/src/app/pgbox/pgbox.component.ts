import { Component } from '@angular/core';
import { pgCard } from './pg.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pgbox',
  templateUrl: './pgbox.component.html',
  styleUrls: ['./pgbox.component.css']
})
export class PGboxComponent {
  characters: pgCard[];
  character: pgCard = new pgCard('Yukari Takeba', 'assets/images/cardPG/yukari.png', 'assets/images/cardPG/yukari.png', 'Persona 3','19/10/1992', 159 ,"Yukari Takeba, studentessa del secondo anno al liceo Gekkoukan e membro del gruppo SEES, è una figura complessa e affascinante all'interno di Persona 3. Nascosta dietro una facciata di freddezza e sarcasmo, si cela un animo sensibile e vulnerabile, segnato da un tragico evento del passato. Dotata di un'intelligenza acuta e di una spiccata vena artistica, Yukari si distingue per la sua abilità nel tiro con l'arco e per il suo Persona, Johanna, capace di infliggere danni devastanti con attacchi di luce e vento. Ma il suo vero talento risiede nel dominio del teatro, dove assume il ruolo di Regina, direttrice e attrice principale della compagnia scolastica. Sotto la sua guida rigorosa e appassionata, il teatro diventa per Yukari un rifugio sicuro, un luogo dove esprimere liberamente le proprie emozioni e affrontare i traumi che la tormentano. Attraverso le sue rappresentazioni, spesso ispirate a vicende mitologiche o letterarie, Yukari esplora la natura umana, indagando temi come la morte, la perdita e la vendetta. Il suo rapporto con il protagonista è inizialmente caratterizzato da diffidenza e rivalità, alimentata da una dolorosa scoperta che li lega entrambi. Tuttavia, con il tempo, la loro relazione si evolve in un profondo legame di amicizia e rispetto reciproco, basato sulla comprensione reciproca delle loro sofferenze e sul desiderio di proteggere l'altro. Yukari Takeba rappresenta un personaggio iconico all'interno di Persona 3, incarnando la forza interiore e la resilienza di chi ha dovuto affrontare l'oscurità e ne è emerso più forte e determinato. La sua complessa personalità, il suo talento artistico e la sua tenacia la rendono una figura memorabile e amata dai fan della serie.");
 

  addItem(newItem: pgCard) {
    this.character = newItem;
  }
 
  constructor(private http: HttpClient) {
    this.characters = [
      new pgCard('Yukari Takeba', 'assets/images/cardPG/yukari.png', 'assets/images/fullPG/fullYukari.png', 'Persona 3','19/10/1992', 159 ,"Yukari Takeba è un personaggio del videogioco Persona 3. Una studentessa delle superiori con una personalità complessa, Yukari è una ragazza intelligente e sensibile. Ha una grande passione per l’arte e la moda, ma nasconde anche una profonda tristezza a causa della perdita di suo padre. Durante le battaglie contro le ombre, Yukari dimostra coraggio e determinazione, spinta dalla voglia di proteggere gli altri. La sua relazione con il protagonista si sviluppa attraverso momenti di vulnerabilità e crescita. In breve, Yukari è un personaggio ricco di sfumature, con un cuore forte e una grande forza interiore."),
      new pgCard('Futaba Sakura', 'assets/images/cardPG/futaba.png', 'assets/images/fullPG/fullFutaba.png', 'Persona 5','19/02/2001', 152 ,"Futaba Sakura, uno dei personaggi principali di Persona 5, è una hacker geniale e un membro dei Ladri Fantasma. Con il suo stile unico e i suoi occhiali da sole, Futaba è una ragazza riservata ma incredibilmente intelligente. La sua abilità nel mondo digitale è fondamentale per il gruppo, e la sua personalità eccentrica la rende un personaggio indimenticabile."),
      new pgCard('Chie Satonaka', 'assets/images/cardPG/chie.png', 'assets/images/fullPG/fullChie.png', 'Persona 4','30/07/1994', 158 ,"Chie Satonaka è un personaggio del videogioco Persona 4. Energica e appassionata, Chie è una studentessa delle superiori che ama il kung fu e i film d’azione. La sua personalità spicca per la sua determinazione e il suo spirito combattivo. Durante l’avventura nel misterioso mondo dell’ombra, Chie dimostra coraggio e lealtà verso i suoi amici. La sua relazione con il personaggio principale si sviluppa attraverso momenti di crescita e sfide. In breve, Chie è una ragazza forte e affascinante, pronta a lottare per ciò in cui crede."),
      new pgCard('Ann Takamaki', 'assets/images/cardPG/ann.png', 'assets/images/fullPG/fullAnn.png', 'Persona 5','12/11/1999', 165 ,"Ann Takamaki è un personaggio vivace e carismatico di Persona 5. Conosciuta per la sua bellezza e il suo stile di moda, Ann combatte contro le ingiustizie sociali come membro dei Ladri Fantasma. La sua Persona, Carmen, riflette la sua passione e determinazione. Nonostante le apparenze, Ann è gentile e si preoccupa profondamente dei suoi amici, lottando per proteggere coloro che sono indifesi."),
      new pgCard('Yosuke Hanamura', 'assets/images/cardPG/yosuke.png', 'assets/images/fullPG/fullYosuke.png', 'Persona 4','22/06/1994', 175 ,"Yosuke Hanamura è il simpatico compagno di classe del protagonista in Persona 4. Figlio del manager del supermercato locale, Yosuke inizia come un ragazzo goffo e maldestro, ma cresce diventando un amico leale e affidabile. La sua Persona, Jiraiya, simboleggia la sua trasformazione e il suo coraggio nel fronteggiare le sfide. Con il suo spirito allegro e la sua determinazione, Yosuke è un pilastro fondamentale del gruppo, sempre pronto a scherzare o a dare una mano."),
      new pgCard('Naoto Shirogane', 'assets/images/cardPG/naoto.png', 'assets/images/fullPG/fullNaoto.png', 'Persona 4','27/04/1995', 152 ,"Naoto Shirogane, il “detective principe” di Persona 4, è un personaggio affascinante e intelligente. Conosciuto per la sua mente acuta e le sue abilità investigative, Naoto affronta i misteri con logica e dedizione. La sua Persona, Sukuna-Hikona, rappresenta la sua ricerca della verità e giustizia. Nonostante la sua apparenza riservata, Naoto possiede un forte senso di giustizia e un impegno incrollabile verso i suoi amici e la ricerca della verità."),
      
    ];
  }


}
