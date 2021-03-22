import React, {useState, useEffect} from 'react';
import './App.css';
import register from './functions/register';
import collapseIcon from './assets/collapseIcon.svg';
function App() {
  const [permissions, setPermissions] = useState([]);
  const [allPermissions, setAllPermissions] = useState([]);
  const [subModules, setSubModules] = useState([])
  const [subModulesCollapse, setSubModulesCollapse] = useState([]); 
  const subModulesMinMax = [[0,1],[2,4],[5,8],[9,9]]

  useEffect(() => {
    let arrPermissions = [];
    let arrAllPermissions = [];
    let arrSubModules = [];
    let arrSubModulesCollapse = [];

    for(let i = 0; i < 50; i++){
      arrPermissions[i] = true;
      if(i < 5)
        arrAllPermissions[i] = true;
      if(i < 20)
        arrSubModules[i] = true;
      if(i < 4)
        arrSubModulesCollapse[i] = true;
    }    
    setPermissions(arrPermissions);
    setAllPermissions(arrAllPermissions);
    setSubModules(arrSubModules);
    setSubModulesCollapse(arrSubModulesCollapse);
  }, []);



  function changeEveryoneCheckBox(index){
    let i = (index + 1) * 10 - 10; 
    let arrPermissions = permissions.slice(); 
    let arrAllPermissions = allPermissions.slice();
    let arrSubModules = subModules.slice();


    for(let j = i; j < (i+10); j++){
      arrPermissions[j] = !allPermissions[index];
    }
    for(let j = 0; j < 4; j++){
      arrSubModules[(4 * index) + j] = !allPermissions[index];
    }

    arrAllPermissions[index] = !allPermissions[index];

    setPermissions(arrPermissions);
    setAllPermissions(arrAllPermissions);
    setSubModules(arrSubModules);
  }
  function changeSubModule(index, subModule){
    let i = (4 * index);
    let arrSubModules = subModules.slice();
    let arrPermissions = permissions.slice(); 
    let arrAllPermissions = allPermissions.slice();

    arrSubModules[i + subModule] = !subModules[i + subModule];    

    let columnBeginning = (index + 1) * 10 - 10 ;
    let min = columnBeginning + subModulesMinMax[subModule][0];
    let max = columnBeginning + subModulesMinMax[subModule][1];

    for(let j = min; j < (max+1); j++){
      arrPermissions[j] = !subModules[i + subModule];
    }
    let AllPermissionsIstrue = true;
    let countFalsePermissions = 0;
    for(let j = i; j < i + 4; j++){
      if(arrSubModules[j] === false){
        countFalsePermissions++;
      }
    }
    if(countFalsePermissions === 4)
      AllPermissionsIstrue = false;

    let countSubModulesPermissions = 0;
    for(let j = 0; j < 4; j++){
      if(arrSubModules[(4 * index) + j] === true)
        countSubModulesPermissions++;
    }
    if(countSubModulesPermissions !== 4)
      AllPermissionsIstrue = false;

    arrAllPermissions[index] = AllPermissionsIstrue;

    setPermissions(arrPermissions);
    setSubModules(arrSubModules);
    setAllPermissions(arrAllPermissions);
  } 
  function changeCheckBoxValue(indexColumn, indexCheckState, subModuleIndex){    
    let arr = permissions.slice();
    let arrAllPermissions = allPermissions.slice();
    let arrSubModules = subModules.slice();
    let columnBeginning = (indexColumn + 1) * 10 - 10 ;

    arr[indexCheckState] = !permissions[indexCheckState];

    let countFalsePermissions = 0;
    let countSubModulesPermissions = 0
    let subModulesIsTrue = true;    
    let min = columnBeginning + subModulesMinMax[subModuleIndex][0];
    let max = columnBeginning + subModulesMinMax[subModuleIndex][1];
    countFalsePermissions = 0;
    for(let i = min; i < (max + 1); i++){
      if(arr[i] == false){
        countFalsePermissions++;
      }
    }
    if(countFalsePermissions === (max + 1 - min))
      subModulesIsTrue = false;
    
    let subModuleGroup = (4 * indexColumn  + subModuleIndex);
    arrSubModules[subModuleGroup] = subModulesIsTrue;


    let indexAllPermissions = indexColumn;
    let AllPermissionsIstrue = true;
    for(let i = columnBeginning; i < (columnBeginning + 10); i++){
      if(arr[i] === false){
        countFalsePermissions++;
      } 
    }   
    if(countFalsePermissions === 10)
      AllPermissionsIstrue = false;

    for(let j = 0; j < 4; j++){
      if(arrSubModules[(4 * indexColumn) + j] === true)
        countSubModulesPermissions++;
    }
    if(countSubModulesPermissions !== 4)
      AllPermissionsIstrue = false;
  
    arrAllPermissions[indexAllPermissions] = AllPermissionsIstrue;  

    setPermissions(arr);
    setAllPermissions(arrAllPermissions);
    setSubModules(arrSubModules);
  }
  function handleClickSM(indexSubModule){
    let newArr = subModulesCollapse.slice();
    newArr[indexSubModule] = !subModulesCollapse[indexSubModule];
    setSubModulesCollapse(newArr)
  }
 
  function Column({title, index}){
    let indexCheckState = (index + 1) * 10 - 10; 

    return(
      <div class="column datePlace">
        <div class="subModule"><p>{title}</p></div>
        <div class="bg-darkGray" >
            <input type="checkbox" class="checkbox" checked={allPermissions[index]} onChange={() => changeEveryoneCheckBox(index)} data-cy={"allcheckbox-col"+index}/>
        </div>
        <div class="bg-lightGray" >
          <input type="checkbox" class="checkbox" checked={subModules[(4 * index)]} onChange={() => changeSubModule(index, 0)} data-cy={"smcheckbox-sm1-col"+index}/>
        </div>
        <div class={subModulesCollapse[0] ? "notCollapse SM1" : "collapse SM1"} data-cy={"groupCollapse-sm1"}>
          <div>
              <input 
                type="checkbox" 
                class="checkbox"
                checked={permissions[indexCheckState]}            
                onChange={() => changeCheckBoxValue(index, indexCheckState, 0)}
                data-cy={"checkbox-sm"+1+"-col"+index+"-i1"}/>
          </div>
          <div>
              <input 
                type="checkbox" 
                class="checkbox"
                checked={permissions[indexCheckState + 1]} 
                data-cy={"checkbox-sm"+1+"-col"+index+"-i2"}
                onChange={() => changeCheckBoxValue(index, indexCheckState + 1, 0)}/>
          </div>
        </div>
       
        <div class="bg-lightGray" >
          <input type="checkbox" class="checkbox" checked={subModules[(4 * index) + 1]} onChange={() => changeSubModule(index, 1)} data-cy={"smcheckbox-sm2-col"+index}/>
        </div>
        <div class={subModulesCollapse[1] ? "notCollapse SM2" : "collapse SM2"} data-cy={"groupCollapse-sm2"}>
          <div >
            <input 
              type="checkbox" 
              class="checkbox"
              checked={permissions[indexCheckState + 2]}               
              data-cy={"checkbox-sm"+2+"-col"+index+"-i3"}
              onChange={() => changeCheckBoxValue(index, (indexCheckState + 2), 1)}/>
          </div>
          <div >
            <input 
              type="checkbox" 
              class="checkbox"
              checked={permissions[indexCheckState + 3]} 
              data-cy={"checkbox-sm"+2+"-col"+index+"-i4"}
              onChange={() => changeCheckBoxValue(index, indexCheckState + 3, 1)}/>
          </div>
          <div >
            <input 
              type="checkbox" 
              class="checkbox"
              checked={permissions[indexCheckState + 4]}              
              data-cy={"checkbox-sm"+2+"-col"+index+"-i5"}
              onChange={() => changeCheckBoxValue(index, indexCheckState + 4, 1)}/>
          </div>
        </div>
        <div class="bg-lightGray" >
          <input type="checkbox" class="checkbox" checked={subModules[(4 * index) + 2]} onChange={() => changeSubModule(index, 2)} data-cy={"smcheckbox-sm3-col"+index}/>
        </div>
        <div class={subModulesCollapse[2] ? "notCollapse SM3" : "collapse SM3"} data-cy={"groupCollapse-sm3"}>
          <div>
            <input 
              type="checkbox" 
              class="checkbox"
              checked={permissions[indexCheckState + 5]}  
            
              data-cy={"checkbox-sm"+3+"-col"+index+"-i6"}
              onChange={() => changeCheckBoxValue(index, indexCheckState + 5, 2)}/>
          </div>
          <div>
            <input 
              type="checkbox" 
              class="checkbox"
              checked={permissions[indexCheckState + 6]}  
            
              data-cy={"checkbox-sm"+3+"-col"+index+"-i7"}
              onChange={() => changeCheckBoxValue(index, indexCheckState + 6, 2)}/>
          </div>
          <div>
            <input 
              type="checkbox" 
              class="checkbox"
              checked={permissions[indexCheckState + 7]}  
            
              data-cy={"checkbox-sm"+3+"-col"+index+"-i8"}
              onChange={() => changeCheckBoxValue(index, indexCheckState + 7, 2)}/>
          </div>
          <div>
            <input 
              type="checkbox" 
              class="checkbox"
              checked={permissions[indexCheckState + 8]}  
            
              data-cy={"checkbox-sm"+3+"-col"+index+"-i9"}
              onChange={() => changeCheckBoxValue(index, indexCheckState + 8, 2)}/>
          </div>
        </div>
        <div class="bg-lightGray" >
          <input type="checkbox" class="checkbox" checked={subModules[(4 * index) + 3]} onChange={() => changeSubModule(index, 3)} data-cy={"smcheckbox-sm4-col"+index}/>
        </div>
        <div class={subModulesCollapse[3] ? "notCollapse SM4" : "collapse SM4"} data-cy={"groupCollapse-sm4"}>
          <div>
            <input 
              type="checkbox" 
              class="checkbox"
              checked={permissions[indexCheckState + 9]}  
            
              data-cy={"checkbox-sm"+4+"-col"+index+"-i10"}
              onChange={() => changeCheckBoxValue(index, indexCheckState + 9, 3)}/>
          </div>
        </div>
      </div>
    )
  }
  
  return (
    <div class="container">
      <main>
        <h1>Tabela de Permissões</h1>
        <div class="table">
          <div class="column module">
            <div class="bg-darkGray subModule">
              <p>Todos</p>              
            </div>
            <div class="bg-lightGray subModule">
              <p>Análise</p>
              <button 
              class={subModulesCollapse[0] ? "btnCollapse active" : "btnCollapse"} onClick={() => handleClickSM(0)} data-cy={"btnCollapse-sm1"}
              >
                <img alt="collapseIcon" src={collapseIcon}/>
              </button>
            </div>
            <div class={subModulesCollapse[0] ? "notCollapse SM1" : "collapse SM1"} data-cy={"groupCollapse-sm1"}>
              <div>
                <p>Análise de contas</p>
              </div>
              <div>
                <p>Análise de transações</p>
              </div>
            </div>
            <div class="bg-lightGray subModule">
              <p>Contas</p>
              <button class={subModulesCollapse[1] ? "btnCollapse active" : "btnCollapse"} onClick={() => handleClickSM(1)} data-cy={"btnCollapse-sm2"}>
                <img alt="collapseIcon" src={collapseIcon} />
              </button>
            </div>
            <div class={subModulesCollapse[1] ? "notCollapse SM2" : "collapse SM2"} data-cy={"groupCollapse-sm2"}>
              <div>
                <p>Cliente</p>
              </div>
              <div>
                <p>Transações</p>
              </div>
              <div>
                <p>Contas digitais</p>
              </div>
            </div>
            <div class="bg-lightGray subModule">
              <p>Customização</p>
              <button class={subModulesCollapse[2] ? "btnCollapse active" : "btnCollapse"} onClick={() => handleClickSM(2)} data-cy={"btnCollapse-sm3"}>
                <img alt="collapseIcon" src={collapseIcon} />
              </button>
            </div>
            <div class={subModulesCollapse[2] ? "notCollapse SM3" : "collapse SM3"} data-cy={"groupCollapse-sm3"}>
              <div>
                <p>Limites e horários</p>
              </div>
              <div>
                <p>Tarifas</p>
              </div>
              <div>
                <p>Tarifas personalizadas</p>
              </div>
              <div>
                <p>Conta</p>
              </div>
            </div>
             <div class="bg-lightGray subModule">
              <p>Financeiro</p>
              <button class={subModulesCollapse[3] ? "btnCollapse active" : "btnCollapse"} onClick={() => handleClickSM(3)} data-cy={"btnCollapse-sm4"}>
                <img alt="collapseIcon" src={collapseIcon} />
              </button>
            </div>
            <div class={subModulesCollapse[3] ? "notCollapse SM4" : "collapse SM4"} data-cy={"groupCollapse-sm4"}>
              <div>
                <p>Entradas</p>
              </div>
            </div>
          </div>
          <div class="horizontalScroll">
            <Column index={0} title="Ver listagem"/>
            <Column index={1} title="Ver detalhes"/>
            <Column index={2} title="Criar"/>
            <Column index={3} title="Editar"/>
            <Column index={4} title="Deletar"/>
          </div>
        </div>
        <button class="btnFinish" onClick={() => register(permissions)}>CADASTRAR</button>
      </main>
    </div>
  );
}

export default App;