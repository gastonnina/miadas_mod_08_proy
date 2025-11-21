# Makefile ajustado: compila dentro de latex/
TEXFILE = main
DIR = src
LATEXINDENT = latexindent

.PHONY: all bib clean view quick

all:
	@echo "📄 Compilando LaTeX (fase 1)..."
	@pdflatex -output-directory=$(DIR) $(DIR)/$(TEXFILE).tex

bib:
	@echo "🔄 Ejecutando Biber..."
	@biber $(DIR)/$(TEXFILE)
	@echo "📄 Compilando LaTeX (fase 2)..."
	@pdflatex -output-directory=$(DIR) $(DIR)/$(TEXFILE).tex
	@pdflatex -output-directory=$(DIR) $(DIR)/$(TEXFILE).tex

quick:
	@echo "⚡ Compilación rápida sin bibliografía..."
	@pdflatex -output-directory=$(DIR) $(DIR)/$(TEXFILE).tex

clean:
	@echo "🧹 Limpiando auxiliares..."
	@latexmk -C -output-directory=$(DIR) $(DIR)/$(TEXFILE).tex || true
	@rm -f $(DIR)/*.nlo $(DIR)/*.apc $(DIR)/*.bbl $(DIR)/*.bcf $(DIR)/*.blg $(DIR)/*.aux $(DIR)/*.bak* $(DIR)/*.log $(DIR)/*.toc $(DIR)/*.out $(DIR)/*.fdb_latexmk $(DIR)/*.fls $(DIR)/*.synctex.gz $(DIR)/*.run.xml
	@rm -f $(DIR)/*.bak*

view:
	@open $(DIR)/$(TEXFILE).pdf

format:
	@echo "✨ Formateando todos los archivos .tex en $(DIR)/ ..."
	@for file in $(DIR)/*.tex; do \
		echo "Formateando $$file..."; \
		$(LATEXINDENT) -w $$file; \
	done

copy:
	@echo "📁 Copiando PDF a la raíz con nuevo nombre..."
	@cp $(DIR)/$(TEXFILE).pdf ./mod_08_miadas_gaston_nina.pdf
