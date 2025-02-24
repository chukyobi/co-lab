```mermaid
graph TD;
    A[User Speaks] -->|Captured Speech| B[Microphone Module];
    B -->|Filtered & Processed| C[AI Speech-to-Text (STT) Engine];
    C -->|Transcribes Speech| D[NLP Processing & Text Optimization];
    D -->|Processed Text| E[Augmented Reality (AR) Display];
    E -->|Text Overlay on Glasses| F[User Reads the Text];
    C -->|Optional Processing| G[Cloud AI Server];
    G -->|Enhanced Processing| D;
    style A fill:#f9f,stroke:#333,stroke-width:2px;
    style F fill:#bbf,stroke:#333,stroke-width:2px;
