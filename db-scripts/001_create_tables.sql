-- ====================================
-- TABELA DE ESTADO
-- ====================================
CREATE TABLE tb_estado (
    sigla CHAR(2) PRIMARY KEY,
    nome VARCHAR(50) NOT NULL
);

-- ====================================
-- TABELA DE MUNICIPIO
-- ====================================
CREATE TABLE tb_municipio (
    id INT PRIMARY KEY,
    estado CHAR(2) NOT NULL,
    nome VARCHAR(150) NOT NULL,
    regiao_intermediaria VARCHAR(100) NULL,

    CONSTRAINT fk_municipio_estado 
        FOREIGN KEY (estado) 
        REFERENCES tb_estado(sigla) 
        ON UPDATE CASCADE 
        ON DELETE CASCADE 
);

-- ====================================
-- TABELA DE IVSA
-- ====================================
CREATE TABLE tb_IVSA (
    id INT PRIMARY KEY,
    municipio INT NOT NULL,
    valor FLOAT,
    faixa CHAR(3),

    CONSTRAINT fk_ivsa_municipio 
        FOREIGN KEY (municipio) 
        REFERENCES tb_municipio(id)
);

-- ====================================
-- TABELA DE CRITERIO
-- ====================================
CREATE TABLE tb_criterio (
    id INT PRIMARY KEY,
    nome VARCHAR(15) NOT NULL,
    descricao VARCHAR(200) NOT NULL
);


-- ====================================
-- TABELA DE SUBCRITERIO
-- ====================================
CREATE TABLE tb_subcriterio (
    id INT PRIMARY KEY,
    nome VARCHAR(15) NOT NULL,
    descricao VARCHAR(200) NOT NULL
);

-- ====================================
-- TABELA DE IVSA CRITERIOS
-- ====================================
CREATE TABLE tb_IVSA_criterio (
    id INT AUTO_INCREMENT PRIMARY KEY,
    criterio INT NOT NULL,
    ivsa INT NOT NULL,
    valor FLOAT NOT NULL,

    CONSTRAINT fk_ivsa_criterio_criterio 
        FOREIGN KEY (criterio) 
        REFERENCES tb_criterio(id),

    CONSTRAINT fk_ivsa_criterio_ivsa
        FOREIGN KEY (ivsa) 
        REFERENCES tb_IVSA(id)
);

-- ====================================
-- TABELA DE MULTICRITERIO
-- ====================================
CREATE TABLE tb_multicriterio (
    id INT AUTO_INCREMENT PRIMARY KEY,
    criterio INT NOT NULL,
    subcriterio INT NOT NULL,

    CONSTRAINT fk_multicriterio_criterio 
        FOREIGN KEY (criterio) 
        REFERENCES tb_criterio(id),

    CONSTRAINT fk_multicriterio_subcriterio 
        FOREIGN KEY (subcriterio) 
        REFERENCES tb_subcriterio(id)
);

-- ====================================
-- TABELA DE INDICADOR
-- ====================================
CREATE TABLE tb_indicador (
    id INT AUTO_INCREMENT PRIMARY KEY,
    municipio INT NOT NULL,
    subcriterio INT NOT NULL,
    valor FLOAT NOT NULL,

    CONSTRAINT fk_indicador_municipio 
        FOREIGN KEY (municipio) 
        REFERENCES tb_municipio(id),

    CONSTRAINT fk_indicador_subcriterio 
        FOREIGN KEY (subcriterio) 
        REFERENCES tb_subcriterio(id)
);