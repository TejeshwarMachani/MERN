import pdfplumber

with pdfplumber.open('Tejeshwar_Machani_Resume.pdf') as pdf:
    for i, page in enumerate(pdf.pages):
        text = page.extract_text()
        if text:
            print(f"--- PAGE {i+1} ---")
            print(text)
            print()