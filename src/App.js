import React from "react";
import { useSelector, useDispatch } from "react-redux";

import "./App.css";
import register from "./functions/register";
import collapseIcon from "./assets/collapseIcon.svg";
import Column from "./components/Column";

import { changeCollapseSubModule } from "./store/UI/UI.actions";

function App() {
  const dispatch = useDispatch();
  const subModuleCollapse = useSelector((state) => state.UI.subModuleCollapse);
  const permissionsCheckbox = useSelector(
    (state) => state.permissions.permissions
  );
  return (
    <div className="container">
      <main>
        <h1>Tabela de Permissões</h1>
        <div className="table">
          <div className="column module">
            <div className="bg-darkGray subModule">
              <p>Todos</p>
            </div>
            <div className="bg-lightGray subModule">
              <p>Análise</p>
              <button
                className={
                  subModuleCollapse[0] ? "btnCollapse active" : "btnCollapse"
                }
                onClick={() => dispatch(changeCollapseSubModule(0))}
                data-cy={"btnCollapse-sm1"}
              >
                <img alt="collapseIcon" src={collapseIcon} />
              </button>
            </div>
            <div
              className={
                subModuleCollapse[0] ? "notCollapse SM1" : "collapse SM1"
              }
              data-cy={"groupCollapse-sm1"}
            >
              <div>
                <p>Análise de contas</p>
              </div>
              <div>
                <p>Análise de transações</p>
              </div>
            </div>
            <div className="bg-lightGray subModule">
              <p>Contas</p>
              <button
                className={
                  subModuleCollapse[1] ? "btnCollapse active" : "btnCollapse"
                }
                onClick={() => dispatch(changeCollapseSubModule(1))}
                data-cy={"btnCollapse-sm2"}
              >
                <img alt="collapseIcon" src={collapseIcon} />
              </button>
            </div>
            <div
              className={
                subModuleCollapse[1] ? "notCollapse SM2" : "collapse SM2"
              }
              data-cy={"groupCollapse-sm2"}
            >
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
            <div className="bg-lightGray subModule">
              <p>Customização</p>
              <button
                className={
                  subModuleCollapse[2] ? "btnCollapse active" : "btnCollapse"
                }
                onClick={() => dispatch(changeCollapseSubModule(2))}
                data-cy={"btnCollapse-sm3"}
              >
                <img alt="collapseIcon" src={collapseIcon} />
              </button>
            </div>
            <div
              className={
                subModuleCollapse[2] ? "notCollapse SM3" : "collapse SM3"
              }
              data-cy={"groupCollapse-sm3"}
            >
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
            <div className="bg-lightGray subModule">
              <p>Financeiro</p>
              <button
                className={
                  subModuleCollapse[3] ? "btnCollapse active" : "btnCollapse"
                }
                onClick={() => dispatch(changeCollapseSubModule(3))}
                data-cy={"btnCollapse-sm4"}
              >
                <img alt="collapseIcon" src={collapseIcon} />
              </button>
            </div>
            <div
              className={
                subModuleCollapse[3] ? "notCollapse SM4" : "collapse SM4"
              }
              data-cy={"groupCollapse-sm4"}
            >
              <div>
                <p>Entradas</p>
              </div>
            </div>
          </div>
          <div className="horizontalScroll">
            <Column indexColumn={0} title="Ver listagem" />
            <Column indexColumn={1} title="Ver detalhes" />
            <Column indexColumn={2} title="Criar" />
            <Column indexColumn={3} title="Editar" />
            <Column indexColumn={4} title="Deletar" />
          </div>
        </div>
        <button
          className="btnFinish"
          onClick={() => register(permissionsCheckbox)}
        >
          CADASTRAR
        </button>
      </main>
    </div>
  );
}

export default App;
