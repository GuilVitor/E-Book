import './inf-Casmurro.css'

function CasmurroInf(){
  const url = "https://appbluemusicguil.herokuapp.com/Destaque"
  
  
  function infTentativa() {
    fetch(url)
    .then(resposta => {
      resposta.json()
      .then(obj => {
      mostrarTentativa(obj);
    })
  })
  .catch()
  }
  function mostrarTentativa(partidas) {
      var tituloo = document.createElement('h6');
      tituloo.innerText = partidas.Destaque[9].Título;

      var autoor = document.createElement('h6');
      autoor.innerText = partidas.Destaque[9].Autor;

      var anoor = document.createElement('h6');
      anoor.innerText = partidas.Destaque[9].Ano;

      var licenca = document.createElement('h6');
      licenca.innerText = partidas.Destaque[9].Licença;
    
      var tipoo = document.createElement('h6');
      tipoo.innerText = partidas.Destaque[9].Tipo;

      var formatoo = document.createElement('h6');
      formatoo.innerText = partidas.Destaque[9].Formato;


      var descricaoo1 = document.createElement('h5');
      descricaoo1.innerText = partidas.Destaque[9].Descrição;

      var capa = document.createElement('img');

      capa.setAttribute('src', partidas.Destaque[9].capa);
      document.getElementById('capaa10').append(capa);

      document.getElementById('tituloo10').append(tituloo);
      document.getElementById('Descricao10').append(descricaoo1);
      document.getElementById('autor10').append(autoor);
      document.getElementById('ano10').append(anoor);
      document.getElementById('licenca10').append(licenca);
      document.getElementById('tipo10').append(tipoo);
      document.getElementById('formato10').append(formatoo);
    }
  
  infTentativa();
  
   
    return (
     
        <>
        
       <div className='inf3'>
         <div className='max-widht'> 

         <div className='center'>

          <div className='perfil'>

              <div id='capaa10' className='capa1'>


              <div id='titulo10' className='titulo1'>
                <b id='tituloo10'>TITULO :</b><br /> 
                <b id='autor10'>AUTOR :</b><br />
                <b id='ano10'>ANO :</b><br />
                <b id='licenca10'>LICENÇA :</b><br />
                <b id='tipo10'>TIPO :</b><br /><br />
                <b id='formato10'>FORMATO EM :</b><br />

            <a href="https://drive.google.com/file/d/1lR3OversLyDs5_7CWbSyZuTkND5UN5Uw/view?usp=sharing"><button className='butao-baixar'>BAIXAR</button></a>

             


</div>


   <div id='Descricao10' className='Descricao1'><b>DESCRIÇÃO : </b> <br /></div> 

             
              </div>

             
               
              </div>
              
              
              <div className='fundo10'>
              
</div>

    </div>
  
  
  

    
  
     
            

          </div>

          </div>
             
          

  




       

       
        </>

  
  
    );

    

  }

  
   export default CasmurroInf;

    




   