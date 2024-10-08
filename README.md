## Projeto de Conclusão de Curso - Pós-Graduação em Engenharia de Software

Este projeto foi desenvolvido como parte da conclusão do curso de pós-graduação em Engenharia de Software, sendo o MVP da última sprint: Qualidade de Software, Segurança e Sistemas Inteligentes. Ele envolve a criação de um modelo de machine learning para resolver um problema de classificação, juntamente com o desenvolvimento de uma aplicação full stack que consome o modelo treinado para realizar predições.

## Sobre o caso analisado

### Dataset Utilizado: https://www.kaggle.com/datasets/krishujeniya/heart-diseae/data

O conjunto de dados consiste em registros médicos de 303 pacientes, cada um caracterizado por 14 características diferentes que podem ser relevantes para prever doenças cardíacas. Os atributos incluídos no conjunto de dados são os seguintes:

0. Age: Idade do paciente em anos.
1. Sex: Gênero do paciente (1 = masculino, 0 = feminino)
2. Chest Pain Type (cp): Indica o tipo de dor no peito experimentada pelo paciente (0 = angina típica, 1 = angina atípica, 2 = dor não anginosa, 3 = assintomático).
3. Resting Blood Pressure (trestbps): A pressão arterial em repouso do paciente medida em mm Hg na admissão.
4. Serum Cholesterol (chol): Nível de colesterol sérico do paciente em mg/dl.
5. Fasting Blood Sugar (fbs): Nível de açúcar no sangue em jejum maior que 120 mg/dl (1 = true, 0 = false).
6. Resting Electrocardiographic Results (restecg): Os resultados do eletrocardiograma em repouso (0 = normal, 1 = anormalidade da onda ST-T, 2 = possível ou definitiva hipertrofia ventricular esquerda).
7. Maximum Heart Rate Achieved (thalach): A frequência cardíaca mais alta alcançada durante o teste de exercício.
8. Exercise-Induced Angina (exang): Se o paciente apresentou angina induzida por exercício (1 = sim, 0 = não).
9. ST Depression (oldpeak): Depressão do segmento ST observada no eletrocardiograma durante o exercício em relação ao repouso.
10. Slope of Peak Exercise ST Segment (slope): Descreve a inclinação do segmento ST do pico do exercício (0 = ascendente, 1 = plano, 2 = descendente).
11. Number of Major Vessels (ca): Número de vasos principais (variando de 0 a 3) visíveis por fluoroscopia.
12. Thalassemia (thal): Distúrbio sanguíneo (1 = normal, 2 = defeito fixo, 3 = defeito reversível).
13. Target: Indica a presença ou ausência de doença cardíaca (1 = presença, 0 = ausência).

Para essa predição, foi escolhido o <strong>modelo SVM</strong>, com o dataset normalizado, onde foi encontrado, entre todos que foram testados, a melhor acurária de 84,6%.

Treinamento do modelo no Google Colab: https://colab.research.google.com/drive/1Xng0rJoQCgW9y4X20zYgwbJ0H7ufl-_9


## Para esse projeto, foram utilizadas as seguintes tecnologias e versões:

### Back-end
    
    Python - 22.3.1
    Flask - 2.1.3
    Flask-SQLAlchemy - 2.5.1
    SQLAlchemy - 1.4.41
    Scikit-Learn - 1.5.2
    Pandas - 2.2.2
    Pytest - 8.3.3
    Jupyter - 1.1.1

### Front-end

    Node.js - 18.17.0
    React - 18
    Next.js - 14.0.4
	TypeScript - 5.3.3
	ESLint - 8.0.0
	Tailwind CSS - 3.3.0

## Estrutura do Projeto

### 1. Treinamento do Modelo de Machine Learning

O modelo de machine learning foi treinado usando um dataset selecionado e passou pelas etapas de:

<ul>
    <li>Carga e pré-processamento dos dados (incluindo normalização/padronização).</li>
    <li>Separação dos dados em conjunto de treino e teste.</li>
    <li>Treinamento utilizando algoritmos clássicos: KNN, Árvore de Decisão, Naive Bayes e SVM.</li>
    <li>Otimização de hiperparâmetros com cross-validation.</li>
    <li>Avaliação e comparação dos resultados.</li>
    <li>O modelo resultante foi exportado e utilizado no backend da aplicação.</li>
</ul>

### 2. Aplicação Full Stack

Back-end:
<ul>
    <li>API para receber novos dados para predição.</li>
    <li>Com o modelo embarcado, é realizada predição e retorna ao front-end os resultados.</li>
    <li>Testes automatizados para verificar a acurácia do modelo.</li>
</ul>

Front-end:
<ul>
    <li>Entrada de novos dados para que o modelo faça a predição.</li>
    <li>Exibição do resultado da predição diretamente na interface.</li>
</ul>


### 3. Repositórios

<ul>
    <li>Google Colab: https://colab.research.google.com/drive/1Xng0rJoQCgW9y4X20zYgwbJ0H7ufl-_9</li>
    <li>Front-end: https://github.com/gabrielnapolis/MVP-Sprint-4-frontend</li>
    <li>Back-end: https://github.com/gabrielnapolis/MVP-Sprint-4-backend</li>
</ul>

## Demonstração

<img src=".\public\images\01.png">

<img src=".\public\images\1.1.png">

<img src=".\public\images\02.png">

<img src=".\public\images\2.1.png">

<img src=".\public\images\03.png">

### 4. Como executar o projeto

#### Back-end

1° - Instalar dependências do projeto:

Este comando instala as dependências/bibliotecas, descritas no arquivo `requirements.txt`.
Execute-o da raiz do projeto.
    
        pip install -r requirements.txt


2° - Para executar a API basta executar:

        flask run --host 0.0.0.0 --port 5000 --reload

#### Front-end

1° - Instalar dependência do projeto. Na raiz do projeto executar:

        npm install

2° - Para executar a aplicação:

        npm run dev

#### Testes

1° - Executar o seguinte comando no raiz do projeto do back-end

    pytest -v test_models.py



