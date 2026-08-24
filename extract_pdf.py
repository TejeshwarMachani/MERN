import fitz  # PyMuPDF

doc = fitz.open("E:/MERN/Tejeshwar_Machani_Resume.pdf")
for page in doc:
    text = page.get_text()
    if text.strip():
        print(f"--- PAGE ---")
        print(text)
        print()