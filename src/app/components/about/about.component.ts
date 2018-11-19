import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  type: String;
  textType: String;
  show: boolean;
  
  constructor() { }

  ngOnInit() {
    this.show = false;
  }

  viewDetail(type: String) {
    if (this.show == false) {
      this.show = true;
    }
    
    this.type = type.toUpperCase();

    if (type === "processo") {
      this.textType = `Todos os processos implantados 
        têm como essência o potencial crescimento da sua empresa, assim os mesmos, passam por 
        cuidadosas avaliações e pelo crivo dos gestores da área.`
    } else if (type === "operacional") {
      this.textType = `Contamos com uma equipe operacional qualificada, 
        movida por desafios e inovação. Manter-se atualizado é o nosso foco.`
    } else if (type === "tecnologia") {
      this.textType = `Soluções específicas e no tempo determinado. Contamos com especialistas 
        na área de Tecnologia, hábeis e capacitados para atender demandas peculiares, dos diversos 
        segmente existentes.`
    } else if (type === "comercial") {
      this.textType = `Excelência no atendimento e satisfação do cliente geram bons frutos. Assim, 
        nosso objetivo é manter alto nível de qualidade e exclusividade dos serviços, simultâneo a 
        construção e manutenção de relacionamento e agenda positiva.`
    } else {
      this.type = "Ops, texto não encontrado"
      this.textType = "Desculpe, mas o texto não pode ser carregado"
    }

  }

}
