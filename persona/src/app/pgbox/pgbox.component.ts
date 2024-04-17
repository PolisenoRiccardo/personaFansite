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
      new pgCard('Yukari Takeba', 'assets/images/cardPG/yukari.png', 'assets/images/fullPG/fullYukari.png', 'Persona 3','19/10/1992', 159 ,"Yukari Takeba, studentessa del secondo anno al liceo Gekkoukan e membro del gruppo SEES, è una figura complessa e affascinante all'interno di Persona 3. Nascosta dietro una facciata di freddezza e sarcasmo, si cela un animo sensibile e vulnerabile, segnato da un tragico evento del passato. Dotata di un'intelligenza acuta e di una spiccata vena artistica, Yukari si distingue per la sua abilità nel tiro con l'arco e per il suo Persona, Johanna, capace di infliggere danni devastanti con attacchi di luce e vento. Ma il suo vero talento risiede nel dominio del teatro, dove assume il ruolo di Regina, direttrice e attrice principale della compagnia scolastica. Sotto la sua guida rigorosa e appassionata, il teatro diventa per Yukari un rifugio sicuro, un luogo dove esprimere liberamente le proprie emozioni e affrontare i traumi che la tormentano. Attraverso le sue rappresentazioni, spesso ispirate a vicende mitologiche o letterarie, Yukari esplora la natura umana, indagando temi come la morte, la perdita e la vendetta. Il suo rapporto con il protagonista è inizialmente caratterizzato da diffidenza e rivalità, alimentata da una dolorosa scoperta che li lega entrambi. Tuttavia, con il tempo, la loro relazione si evolve in un profondo legame di amicizia e rispetto reciproco, basato sulla comprensione reciproca delle loro sofferenze e sul desiderio di proteggere l'altro. Yukari Takeba rappresenta un personaggio iconico all'interno di Persona 3, incarnando la forza interiore e la resilienza di chi ha dovuto affrontare l'oscurità e ne è emerso più forte e determinato. La sua complessa personalità, il suo talento artistico e la sua tenacia la rendono una figura memorabile e amata dai fan della serie."),
      new pgCard('Futaba Sakura', 'assets/images/cardPG/futaba.png', 'assets/images/fullPG/fullFutaba.png', 'Persona 5','19/2/2001', 152 ,"Futaba Sakura, introdotta in Persona 5, è una studentessa del secondo anno al liceo Kosei e membro dei Phantom Thieves. Nascosta dietro un cappuccio e un atteggiamento introverso, si rivela un'hacker prodigiosa con un intelletto acuto e una profonda conoscenza del mondo digitale. Traumatizzata da un tragico evento del passato, Futaba si è isolata dal mondo reale, rifugiandosi nel cyberspazio dove può esprimere liberamente la sua creatività e sfuggire ai dolorosi ricordi. La sua abilità informatica diventa l'arma principale dei Phantom Thieves, permettendo loro di navigare nel Mementos, il mondo cognitivo distorto, e di infiltrarsi nei Palazzi, le manifestazioni distorte dei desideri corrotti degli individui. Il suo Persona, Oracle, riflette la sua natura introversa ma determinata. Oracle fornisce ai Phantom Thieves informazioni preziose durante le battaglie, analizzando i nemici e offrendo strategie di attacco. La sua abilità di hacker le permette inoltre di manipolare i sistemi informatici e di creare diversioni per agevolare le azioni del gruppo. Futaba evolve gradualmente nel corso della storia, aprendosi gradualmente agli altri membri dei Phantom Thieves e formando con loro legami di amicizia e supporto reciproco. Impara ad affrontare i suoi traumi e a confrontarsi con il mondo reale, trovando nella sua passione per l'informatica e nel suo ruolo all'interno del gruppo un nuovo senso di appartenenza e realizzazione. Futaba Sakura rappresenta un personaggio emblematico in Persona 5, incarnando la forza interiore e la resilienza di chi ha dovuto superare difficoltà immense. La sua intelligenza, la sua abilità informatica e la sua evoluzione personale la rendono una figura amata e apprezzata dai fan della serie."),
      new pgCard('Yukari Takeba', 'assets/images/cardPG/yukari.png', 'assets/images/fullPG/fullYukari.png', 'Persona 3','19/10/1992', 159 ,"Yukari Takeba, studentessa del secondo anno al liceo Gekkoukan e membro del gruppo SEES, è una figura complessa e affascinante all'interno di Persona 3. Nascosta dietro una facciata di freddezza e sarcasmo, si cela un animo sensibile e vulnerabile, segnato da un tragico evento del passato. Dotata di un'intelligenza acuta e di una spiccata vena artistica, Yukari si distingue per la sua abilità nel tiro con l'arco e per il suo Persona, Johanna, capace di infliggere danni devastanti con attacchi di luce e vento. Ma il suo vero talento risiede nel dominio del teatro, dove assume il ruolo di Regina, direttrice e attrice principale della compagnia scolastica. Sotto la sua guida rigorosa e appassionata, il teatro diventa per Yukari un rifugio sicuro, un luogo dove esprimere liberamente le proprie emozioni e affrontare i traumi che la tormentano. Attraverso le sue rappresentazioni, spesso ispirate a vicende mitologiche o letterarie, Yukari esplora la natura umana, indagando temi come la morte, la perdita e la vendetta. Il suo rapporto con il protagonista è inizialmente caratterizzato da diffidenza e rivalità, alimentata da una dolorosa scoperta che li lega entrambi. Tuttavia, con il tempo, la loro relazione si evolve in un profondo legame di amicizia e rispetto reciproco, basato sulla comprensione reciproca delle loro sofferenze e sul desiderio di proteggere l'altro. Yukari Takeba rappresenta un personaggio iconico all'interno di Persona 3, incarnando la forza interiore e la resilienza di chi ha dovuto affrontare l'oscurità e ne è emerso più forte e determinato. La sua complessa personalità, il suo talento artistico e la sua tenacia la rendono una figura memorabile e amata dai fan della serie."),
      new pgCard('Futaba Sakura', 'assets/images/cardPG/futaba.png', 'assets/images/fullPG/fullFutaba.png', 'Persona 5','19/2/2001', 152 ,"Futaba Sakura, introdotta in Persona 5, è una studentessa del secondo anno al liceo Kosei e membro dei Phantom Thieves. Nascosta dietro un cappuccio e un atteggiamento introverso, si rivela un'hacker prodigiosa con un intelletto acuto e una profonda conoscenza del mondo digitale. Traumatizzata da un tragico evento del passato, Futaba si è isolata dal mondo reale, rifugiandosi nel cyberspazio dove può esprimere liberamente la sua creatività e sfuggire ai dolorosi ricordi. La sua abilità informatica diventa l'arma principale dei Phantom Thieves, permettendo loro di navigare nel Mementos, il mondo cognitivo distorto, e di infiltrarsi nei Palazzi, le manifestazioni distorte dei desideri corrotti degli individui. Il suo Persona, Oracle, riflette la sua natura introversa ma determinata. Oracle fornisce ai Phantom Thieves informazioni preziose durante le battaglie, analizzando i nemici e offrendo strategie di attacco. La sua abilità di hacker le permette inoltre di manipolare i sistemi informatici e di creare diversioni per agevolare le azioni del gruppo. Futaba evolve gradualmente nel corso della storia, aprendosi gradualmente agli altri membri dei Phantom Thieves e formando con loro legami di amicizia e supporto reciproco. Impara ad affrontare i suoi traumi e a confrontarsi con il mondo reale, trovando nella sua passione per l'informatica e nel suo ruolo all'interno del gruppo un nuovo senso di appartenenza e realizzazione. Futaba Sakura rappresenta un personaggio emblematico in Persona 5, incarnando la forza interiore e la resilienza di chi ha dovuto superare difficoltà immense. La sua intelligenza, la sua abilità informatica e la sua evoluzione personale la rendono una figura amata e apprezzata dai fan della serie."),
      new pgCard('Yukari Takeba', 'assets/images/cardPG/yukari.png', 'assets/images/fullPG/fullYukari.png', 'Persona 3','19/10/1992', 159 ,"Yukari Takeba, studentessa del secondo anno al liceo Gekkoukan e membro del gruppo SEES, è una figura complessa e affascinante all'interno di Persona 3. Nascosta dietro una facciata di freddezza e sarcasmo, si cela un animo sensibile e vulnerabile, segnato da un tragico evento del passato. Dotata di un'intelligenza acuta e di una spiccata vena artistica, Yukari si distingue per la sua abilità nel tiro con l'arco e per il suo Persona, Johanna, capace di infliggere danni devastanti con attacchi di luce e vento. Ma il suo vero talento risiede nel dominio del teatro, dove assume il ruolo di Regina, direttrice e attrice principale della compagnia scolastica. Sotto la sua guida rigorosa e appassionata, il teatro diventa per Yukari un rifugio sicuro, un luogo dove esprimere liberamente le proprie emozioni e affrontare i traumi che la tormentano. Attraverso le sue rappresentazioni, spesso ispirate a vicende mitologiche o letterarie, Yukari esplora la natura umana, indagando temi come la morte, la perdita e la vendetta. Il suo rapporto con il protagonista è inizialmente caratterizzato da diffidenza e rivalità, alimentata da una dolorosa scoperta che li lega entrambi. Tuttavia, con il tempo, la loro relazione si evolve in un profondo legame di amicizia e rispetto reciproco, basato sulla comprensione reciproca delle loro sofferenze e sul desiderio di proteggere l'altro. Yukari Takeba rappresenta un personaggio iconico all'interno di Persona 3, incarnando la forza interiore e la resilienza di chi ha dovuto affrontare l'oscurità e ne è emerso più forte e determinato. La sua complessa personalità, il suo talento artistico e la sua tenacia la rendono una figura memorabile e amata dai fan della serie."),
      new pgCard('Futaba Sakura', 'assets/images/cardPG/futaba.png', 'assets/images/fullPG/fullFutaba.png', 'Persona 5','19/2/2001', 152 ,"Futaba Sakura, introdotta in Persona 5, è una studentessa del secondo anno al liceo Kosei e membro dei Phantom Thieves. Nascosta dietro un cappuccio e un atteggiamento introverso, si rivela un'hacker prodigiosa con un intelletto acuto e una profonda conoscenza del mondo digitale. Traumatizzata da un tragico evento del passato, Futaba si è isolata dal mondo reale, rifugiandosi nel cyberspazio dove può esprimere liberamente la sua creatività e sfuggire ai dolorosi ricordi. La sua abilità informatica diventa l'arma principale dei Phantom Thieves, permettendo loro di navigare nel Mementos, il mondo cognitivo distorto, e di infiltrarsi nei Palazzi, le manifestazioni distorte dei desideri corrotti degli individui. Il suo Persona, Oracle, riflette la sua natura introversa ma determinata. Oracle fornisce ai Phantom Thieves informazioni preziose durante le battaglie, analizzando i nemici e offrendo strategie di attacco. La sua abilità di hacker le permette inoltre di manipolare i sistemi informatici e di creare diversioni per agevolare le azioni del gruppo. Futaba evolve gradualmente nel corso della storia, aprendosi gradualmente agli altri membri dei Phantom Thieves e formando con loro legami di amicizia e supporto reciproco. Impara ad affrontare i suoi traumi e a confrontarsi con il mondo reale, trovando nella sua passione per l'informatica e nel suo ruolo all'interno del gruppo un nuovo senso di appartenenza e realizzazione. Futaba Sakura rappresenta un personaggio emblematico in Persona 5, incarnando la forza interiore e la resilienza di chi ha dovuto superare difficoltà immense. La sua intelligenza, la sua abilità informatica e la sua evoluzione personale la rendono una figura amata e apprezzata dai fan della serie."),
      new pgCard('Yukari Takeba', 'assets/images/cardPG/yukari.png', 'assets/images/fullPG/fullYukari.png', 'Persona 3','19/10/1992', 159 ,"Yukari Takeba, studentessa del secondo anno al liceo Gekkoukan e membro del gruppo SEES, è una figura complessa e affascinante all'interno di Persona 3. Nascosta dietro una facciata di freddezza e sarcasmo, si cela un animo sensibile e vulnerabile, segnato da un tragico evento del passato. Dotata di un'intelligenza acuta e di una spiccata vena artistica, Yukari si distingue per la sua abilità nel tiro con l'arco e per il suo Persona, Johanna, capace di infliggere danni devastanti con attacchi di luce e vento. Ma il suo vero talento risiede nel dominio del teatro, dove assume il ruolo di Regina, direttrice e attrice principale della compagnia scolastica. Sotto la sua guida rigorosa e appassionata, il teatro diventa per Yukari un rifugio sicuro, un luogo dove esprimere liberamente le proprie emozioni e affrontare i traumi che la tormentano. Attraverso le sue rappresentazioni, spesso ispirate a vicende mitologiche o letterarie, Yukari esplora la natura umana, indagando temi come la morte, la perdita e la vendetta. Il suo rapporto con il protagonista è inizialmente caratterizzato da diffidenza e rivalità, alimentata da una dolorosa scoperta che li lega entrambi. Tuttavia, con il tempo, la loro relazione si evolve in un profondo legame di amicizia e rispetto reciproco, basato sulla comprensione reciproca delle loro sofferenze e sul desiderio di proteggere l'altro. Yukari Takeba rappresenta un personaggio iconico all'interno di Persona 3, incarnando la forza interiore e la resilienza di chi ha dovuto affrontare l'oscurità e ne è emerso più forte e determinato. La sua complessa personalità, il suo talento artistico e la sua tenacia la rendono una figura memorabile e amata dai fan della serie."),
      new pgCard('Futaba Sakura', 'assets/images/cardPG/futaba.png', 'assets/images/fullPG/fullFutaba.png', 'Persona 5','19/2/2001', 152 ,"Futaba Sakura, introdotta in Persona 5, è una studentessa del secondo anno al liceo Kosei e membro dei Phantom Thieves. Nascosta dietro un cappuccio e un atteggiamento introverso, si rivela un'hacker prodigiosa con un intelletto acuto e una profonda conoscenza del mondo digitale. Traumatizzata da un tragico evento del passato, Futaba si è isolata dal mondo reale, rifugiandosi nel cyberspazio dove può esprimere liberamente la sua creatività e sfuggire ai dolorosi ricordi. La sua abilità informatica diventa l'arma principale dei Phantom Thieves, permettendo loro di navigare nel Mementos, il mondo cognitivo distorto, e di infiltrarsi nei Palazzi, le manifestazioni distorte dei desideri corrotti degli individui. Il suo Persona, Oracle, riflette la sua natura introversa ma determinata. Oracle fornisce ai Phantom Thieves informazioni preziose durante le battaglie, analizzando i nemici e offrendo strategie di attacco. La sua abilità di hacker le permette inoltre di manipolare i sistemi informatici e di creare diversioni per agevolare le azioni del gruppo. Futaba evolve gradualmente nel corso della storia, aprendosi gradualmente agli altri membri dei Phantom Thieves e formando con loro legami di amicizia e supporto reciproco. Impara ad affrontare i suoi traumi e a confrontarsi con il mondo reale, trovando nella sua passione per l'informatica e nel suo ruolo all'interno del gruppo un nuovo senso di appartenenza e realizzazione. Futaba Sakura rappresenta un personaggio emblematico in Persona 5, incarnando la forza interiore e la resilienza di chi ha dovuto superare difficoltà immense. La sua intelligenza, la sua abilità informatica e la sua evoluzione personale la rendono una figura amata e apprezzata dai fan della serie."),
      new pgCard('Yukari Takeba', 'assets/images/cardPG/yukari.png', 'assets/images/fullPG/fullYukari.png', 'Persona 3','19/10/1992', 159 ,"Yukari Takeba, studentessa del secondo anno al liceo Gekkoukan e membro del gruppo SEES, è una figura complessa e affascinante all'interno di Persona 3. Nascosta dietro una facciata di freddezza e sarcasmo, si cela un animo sensibile e vulnerabile, segnato da un tragico evento del passato. Dotata di un'intelligenza acuta e di una spiccata vena artistica, Yukari si distingue per la sua abilità nel tiro con l'arco e per il suo Persona, Johanna, capace di infliggere danni devastanti con attacchi di luce e vento. Ma il suo vero talento risiede nel dominio del teatro, dove assume il ruolo di Regina, direttrice e attrice principale della compagnia scolastica. Sotto la sua guida rigorosa e appassionata, il teatro diventa per Yukari un rifugio sicuro, un luogo dove esprimere liberamente le proprie emozioni e affrontare i traumi che la tormentano. Attraverso le sue rappresentazioni, spesso ispirate a vicende mitologiche o letterarie, Yukari esplora la natura umana, indagando temi come la morte, la perdita e la vendetta. Il suo rapporto con il protagonista è inizialmente caratterizzato da diffidenza e rivalità, alimentata da una dolorosa scoperta che li lega entrambi. Tuttavia, con il tempo, la loro relazione si evolve in un profondo legame di amicizia e rispetto reciproco, basato sulla comprensione reciproca delle loro sofferenze e sul desiderio di proteggere l'altro. Yukari Takeba rappresenta un personaggio iconico all'interno di Persona 3, incarnando la forza interiore e la resilienza di chi ha dovuto affrontare l'oscurità e ne è emerso più forte e determinato. La sua complessa personalità, il suo talento artistico e la sua tenacia la rendono una figura memorabile e amata dai fan della serie."),
      new pgCard('Futaba Sakura', 'assets/images/cardPG/futaba.png', 'assets/images/fullPG/fullFutaba.png', 'Persona 5','19/2/2001', 152 ,"Futaba Sakura, introdotta in Persona 5, è una studentessa del secondo anno al liceo Kosei e membro dei Phantom Thieves. Nascosta dietro un cappuccio e un atteggiamento introverso, si rivela un'hacker prodigiosa con un intelletto acuto e una profonda conoscenza del mondo digitale. Traumatizzata da un tragico evento del passato, Futaba si è isolata dal mondo reale, rifugiandosi nel cyberspazio dove può esprimere liberamente la sua creatività e sfuggire ai dolorosi ricordi. La sua abilità informatica diventa l'arma principale dei Phantom Thieves, permettendo loro di navigare nel Mementos, il mondo cognitivo distorto, e di infiltrarsi nei Palazzi, le manifestazioni distorte dei desideri corrotti degli individui. Il suo Persona, Oracle, riflette la sua natura introversa ma determinata. Oracle fornisce ai Phantom Thieves informazioni preziose durante le battaglie, analizzando i nemici e offrendo strategie di attacco. La sua abilità di hacker le permette inoltre di manipolare i sistemi informatici e di creare diversioni per agevolare le azioni del gruppo. Futaba evolve gradualmente nel corso della storia, aprendosi gradualmente agli altri membri dei Phantom Thieves e formando con loro legami di amicizia e supporto reciproco. Impara ad affrontare i suoi traumi e a confrontarsi con il mondo reale, trovando nella sua passione per l'informatica e nel suo ruolo all'interno del gruppo un nuovo senso di appartenenza e realizzazione. Futaba Sakura rappresenta un personaggio emblematico in Persona 5, incarnando la forza interiore e la resilienza di chi ha dovuto superare difficoltà immense. La sua intelligenza, la sua abilità informatica e la sua evoluzione personale la rendono una figura amata e apprezzata dai fan della serie."),
      new pgCard('Yukari Takeba', 'assets/images/cardPG/yukari.png', 'assets/images/fullPG/fullYukari.png', 'Persona 3','19/10/1992', 159 ,"Yukari Takeba, studentessa del secondo anno al liceo Gekkoukan e membro del gruppo SEES, è una figura complessa e affascinante all'interno di Persona 3. Nascosta dietro una facciata di freddezza e sarcasmo, si cela un animo sensibile e vulnerabile, segnato da un tragico evento del passato. Dotata di un'intelligenza acuta e di una spiccata vena artistica, Yukari si distingue per la sua abilità nel tiro con l'arco e per il suo Persona, Johanna, capace di infliggere danni devastanti con attacchi di luce e vento. Ma il suo vero talento risiede nel dominio del teatro, dove assume il ruolo di Regina, direttrice e attrice principale della compagnia scolastica. Sotto la sua guida rigorosa e appassionata, il teatro diventa per Yukari un rifugio sicuro, un luogo dove esprimere liberamente le proprie emozioni e affrontare i traumi che la tormentano. Attraverso le sue rappresentazioni, spesso ispirate a vicende mitologiche o letterarie, Yukari esplora la natura umana, indagando temi come la morte, la perdita e la vendetta. Il suo rapporto con il protagonista è inizialmente caratterizzato da diffidenza e rivalità, alimentata da una dolorosa scoperta che li lega entrambi. Tuttavia, con il tempo, la loro relazione si evolve in un profondo legame di amicizia e rispetto reciproco, basato sulla comprensione reciproca delle loro sofferenze e sul desiderio di proteggere l'altro. Yukari Takeba rappresenta un personaggio iconico all'interno di Persona 3, incarnando la forza interiore e la resilienza di chi ha dovuto affrontare l'oscurità e ne è emerso più forte e determinato. La sua complessa personalità, il suo talento artistico e la sua tenacia la rendono una figura memorabile e amata dai fan della serie."),
      new pgCard('Futaba Sakura', 'assets/images/cardPG/futaba.png', 'assets/images/fullPG/fullFutaba.png', 'Persona 5','19/2/2001', 152 ,"Futaba Sakura, introdotta in Persona 5, è una studentessa del secondo anno al liceo Kosei e membro dei Phantom Thieves. Nascosta dietro un cappuccio e un atteggiamento introverso, si rivela un'hacker prodigiosa con un intelletto acuto e una profonda conoscenza del mondo digitale. Traumatizzata da un tragico evento del passato, Futaba si è isolata dal mondo reale, rifugiandosi nel cyberspazio dove può esprimere liberamente la sua creatività e sfuggire ai dolorosi ricordi. La sua abilità informatica diventa l'arma principale dei Phantom Thieves, permettendo loro di navigare nel Mementos, il mondo cognitivo distorto, e di infiltrarsi nei Palazzi, le manifestazioni distorte dei desideri corrotti degli individui. Il suo Persona, Oracle, riflette la sua natura introversa ma determinata. Oracle fornisce ai Phantom Thieves informazioni preziose durante le battaglie, analizzando i nemici e offrendo strategie di attacco. La sua abilità di hacker le permette inoltre di manipolare i sistemi informatici e di creare diversioni per agevolare le azioni del gruppo. Futaba evolve gradualmente nel corso della storia, aprendosi gradualmente agli altri membri dei Phantom Thieves e formando con loro legami di amicizia e supporto reciproco. Impara ad affrontare i suoi traumi e a confrontarsi con il mondo reale, trovando nella sua passione per l'informatica e nel suo ruolo all'interno del gruppo un nuovo senso di appartenenza e realizzazione. Futaba Sakura rappresenta un personaggio emblematico in Persona 5, incarnando la forza interiore e la resilienza di chi ha dovuto superare difficoltà immense. La sua intelligenza, la sua abilità informatica e la sua evoluzione personale la rendono una figura amata e apprezzata dai fan della serie.")
    ];
  }


}
