import { produtoRepository } from "../repositories/produtoRepository";

export const produtoService = {
    async criarProduto(dto){
        if(dto.preco < 0) throw new Error("Preços abaixo de 0 não são permitidos");
        return produtoRepository.criar(dto);
    },
    async listarProdutos(){
        return produtoRepository.listarTodos();
    },
    async obterProduto(id){
        const p = await produtoRepository.buscarPorId(id);
        if(!p) throw new Error("Produto não encontrado");
        return p;
    },
    async atualizarProduto(id, dto){
        return produtoRepository.atualizar(id, dto);
    },
    async removerProduto(id){
        if(!id) throw new Error("Produto não existe");
        return produtoRepository.deletar(id);

    }
}