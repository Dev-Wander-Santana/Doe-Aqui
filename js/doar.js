const urlParams = new URLSearchParams(window.location.search);
    const ongId = urlParams.get('ong');
    const ong = getOngById(ongId);

    if (!ong) {
      document.getElementById('donation-content').innerHTML = `
        <div class="text-center">
          <h2>ONG não encontrada</h2>
          <a href="ongs.html" class="btn btn-primary">Ver todas as ONGs</a>
        </div>
      `;
    } else {
      document.getElementById('donation-content').innerHTML = `
        <div class="grid grid-cols-1 grid-cols-md-2">
          <div class="card" style="padding: 1.5rem; margin-bottom: 1.5rem;">
            <img src="${ong.image}" alt="${ong.name}" style="width: 100%; height: 12rem; object-fit: cover; border-radius: var(--radius); margin-bottom: 1rem;">
            <h2 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 0.5rem;">${ong.name}</h2>
            <p class="text-muted" style="margin-bottom: 1rem;">${ong.description}</p>
            
            <div style="background: var(--muted); border-radius: var(--radius); padding: 1rem;">
              <div style="display: flex; align-items: center; justify-content: center; gap: 0.5rem; margin-bottom: 0.75rem;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="9" y1="9" x2="15" y2="15"></line>
                  <line x1="15" y1="9" x2="9" y2="15"></line>
                </svg>
                <span style="font-weight: 600;">Chave Pix</span>
              </div>
              <p style="text-align: center; font-family: monospace; font-size: 0.875rem; background: var(--card); padding: 0.75rem; border-radius: var(--radius); border: 1px solid var(--border);">
                ${ong.pixKey}
              </p>
              <p style="font-size: 0.75rem; color: var(--muted-foreground); text-align: center; margin-top: 0.5rem;">
                Escaneie o QR Code ou copie a chave Pix acima
              </p>
            </div>
          </div>

          <div class="card" style="padding: 1.5rem;">
            <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 1.5rem;">Confirme sua Doação</h3>
            
            <form id="donation-form">
              <div class="form-group">
                <label class="form-label" for="donor-name">Seu Nome</label>
                <input type="text" id="donor-name" class="form-input" placeholder="Digite seu nome" required>
              </div>

              <div class="form-group">
                <label class="form-label" for="amount">Valor da Doação (R$)</label>
                <input type="number" id="amount" class="form-input" step="0.01" min="0.01" placeholder="0,00" required>
              </div>

              <div style="background: var(--primary); background-opacity: 0.1; border: 1px solid var(--primary); border-opacity: 0.2; border-radius: var(--radius); padding: 1rem; margin-bottom: 1.5rem;">
                <p style="font-size: 0.875rem; color: var(--muted-foreground); margin-bottom: 0.5rem;">
                  <strong>Instruções:</strong>
                </p>
                <ol style="font-size: 0.875rem; color: var(--muted-foreground); padding-left: 1.25rem;">
                  <li>Realize o pagamento via Pix usando a chave ao lado</li>
                  <li>Preencha os campos acima</li>
                  <li>Clique em "Confirmar Doação"</li>
                </ol>
              </div>

              <button type="submit" class="btn btn-primary" style="width: 100%; font-size: 1.125rem; padding: 1.5rem;">
                Confirmar Doação
              </button>
            </form>
          </div>
        </div>
      `;

      document.getElementById('donation-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const donorName = document.getElementById('donor-name').value;
        const amount = parseFloat(document.getElementById('amount').value);

        if (!donorName || !amount || amount <= 0) {
          showToast('Por favor, preencha todos os campos corretamente', 'error');
          return;
        }

        const donation = addDonation({
          ongId: ong.id,
          ongName: ong.name,
          donorName,
          amount
        });

        document.getElementById('donation-content').classList.add('hidden');
        document.getElementById('receipt-content').classList.remove('hidden');
        document.getElementById('receipt-content').innerHTML = `
          <div class="card" style="padding: 2rem; text-align: center; box-shadow: var(--shadow-lg);">
            <div style="width: 5rem; height: 5rem; border-radius: 50%; background: var(--secondary); opacity: 0.2; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem;">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" stroke-width="2">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            
            <h1 style="font-size: 1.875rem; font-weight: 700; margin-bottom: 0.5rem;">Doação Confirmada!</h1>
            <p class="text-muted" style="margin-bottom: 2rem;">Obrigado por fazer a diferença!</p>

            <div style="background: var(--muted); border-radius: var(--radius); padding: 1.5rem; margin-bottom: 1.5rem; text-align: left;">
              <div style="display: flex; justify-content: space-between; margin-bottom: 0.75rem;">
                <span class="text-muted">ONG:</span>
                <span style="font-weight: 600;">${donation.ongName}</span>
              </div>
              <div style="display: flex; justify-content: space-between; margin-bottom: 0.75rem;">
                <span class="text-muted">Doador:</span>
                <span style="font-weight: 600;">${donation.donorName}</span>
              </div>
              <div style="display: flex; justify-content: space-between; margin-bottom: 0.75rem;">
                <span class="text-muted">Valor:</span>
                <span style="font-weight: 700; color: var(--primary); font-size: 1.25rem;">${formatCurrency(donation.amount)}</span>
              </div>
              <div style="display: flex; justify-content: space-between;">
                <span class="text-muted">Data:</span>
                <span style="font-weight: 600;">${formatDateTime(donation.date)}</span>
              </div>
            </div>

            <div style="display: flex; gap: 0.75rem;">
              <a href="ong-detail.html?id=${ong.id}" class="btn btn-outline" style="flex: 1;">Ver ONG</a>
              <a href="ongs.html" class="btn btn-primary" style="flex: 1;">Fazer outra doação</a>
            </div>
          </div>
        `;

        showToast('Doação registrada com sucesso!');
      });
    }
