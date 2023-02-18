import Cliente from "@/core/Cliente";
import { useState } from "react";
import Botao from "./Botao";
import Input from "./Input";

interface FormularioProps {
  cliente: Cliente;
  clienteChange?: (cliente: Cliente) => void;
  cancelado?: () => void;
}

export default function Formulario(props: FormularioProps) {
  const id = props.cliente?.id ?? null;
  const [nome, setNome] = useState(props.cliente?.nome ?? "");
  const [idade, setIdade] = useState(props.cliente?.idade ?? 0);

  return (
    <div>
      {id ? (
        <Input somenteLeitura texto='Código' valor={id} className='mb-4' />
      ) : (
        false
      )}
      <Input texto='Nome' valor={nome} onChange={setNome} className='mb-4' />
      <Input texto='Idade' tipo='number' valor={idade} onChange={setIdade} />
      <div className='flex justify-end mt-4'>
        <Botao
          cor='blue'
          className='mr-2'
          onClick={() => props.clienteChange?.(new Cliente(nome, +idade, id))}
        >
          {id ? "Alterar" : "Salvar"}
        </Botao>
        <Botao onClick={props.cancelado}>Cancelar</Botao>
      </div>
    </div>
  );
}
