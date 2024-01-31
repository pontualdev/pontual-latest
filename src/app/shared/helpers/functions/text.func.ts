export function slugfy(text: string): string{
    return text.toString().toLowerCase()
    .replace(/\s+/g, '-')          // Substitui espaços por hífens
    .replace(/[^\w\-]+/g, '')      // Remove caracteres especiais
    .replace(/\-\-+/g, '-')        // Substitui múltiplos hífens por um único hífen
    .replace(/^-+/, '')            // Remove hífens no início
    .replace(/-+$/, '');           // Remove hífens no final
}