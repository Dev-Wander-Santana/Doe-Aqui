const urlParams = new URLSearchParams(window.location.search);
const ongId = urlParams.get('id');
const ong = getOngById(ongId);

if (!ong) {
  document.getElementById('ong-content').innerHTML = `
        <div class="text-center">
          <h1 style="font-size: 2rem; font-weight: 700; margin-bottom: 1rem;">ONG não encontrada</h1>
          <a href="ongs.html" class="btn btn-primary">Ver todas as ONGs</a>
        </div>
      `;
} else {
  document.getElementById('page-title').textContent = `${ong.name} - Doe Aqui`;

  const donations = getDonationsByOng(ong.id);
  const totalRaised = donations.reduce((sum, d) => sum + d.amount, 0);
  const progress = (totalRaised / ong.goal) * 100;

  document.getElementById('ong-content').innerHTML = `
        <div class="grid grid-cols-1" style="grid-template-columns: 1fr; gap: 2rem;">
          <div>
            <img src="${ong.image}" alt="${ong.name}" style="width: 100%; height: 24rem; object-fit: cover; border-radius: var(--radius); box-shadow: var(--shadow-md); margin-bottom: 1.5rem;">
            
            <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">
              <span class="badge">${ong.category}</span>
              <div style="display: flex; align-items: center; gap: 0.25rem; color: var(--muted-foreground);">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>${ong.city}</span>
              </div>
            </div>
            
            <h1 style="font-size: 2.5rem; font-weight: 700; margin-bottom: 1rem;">${ong.name}</h1>
            <p style="color: var(--muted-foreground); font-size: 1.125rem; line-height: 1.7; margin-bottom: 2rem;">
              ${ong.fullDescription}
            </p>

            <div class="card" style="padding: 1.5rem; margin-bottom: 2rem;">
              <div style="margin-bottom: 1.5rem;">
                <div style="display: flex; justify-content: space-between; align-items: end; margin-bottom: 0.5rem;">
                  <div>
                    <p style="font-size: 0.875rem; color: var(--muted-foreground);">Arrecadado</p>
                    <p style="font-size: 1.5rem; font-weight: 700; color: var(--primary);">${formatCurrency(totalRaised)}</p>
                  </div>
                  <div style="text-align: right;">
                    <p style="font-size: 0.875rem; color: var(--muted-foreground);">Meta</p>
                    <p style="font-size: 1.125rem; font-weight: 600;">${formatCurrency(ong.goal)}</p>
                  </div>
                </div>
                <div class="progress">
                  <div class="progress-bar" style="width: ${progress}%"></div>
                </div>
                <p style="font-size: 0.875rem; color: var(--muted-foreground); margin-top: 0.5rem;">
                  ${progress.toFixed(1)}% da meta alcançada
                </p>
              </div>

              <a href="doar.html?ong=${ong.id}" class="btn btn-primary" style="width: 100%; font-size: 1.125rem; padding: 1.5rem;">
                ❤️ Doar via Pix
              </a>

              <div style="margin-top: 1.5rem; padding: 1rem; background: var(--muted); border-radius: var(--radius);">
                <h3 style="font-weight: 600; margin-bottom: 0.5rem;">Por que doar?</h3>
                <ul style="font-size: 0.875rem; color: var(--muted-foreground); list-style: none; padding: 0;">
                  <li style="margin-bottom: 0.5rem;">✓ 100% seguro via Pix</li>
                  <li style="margin-bottom: 0.5rem;">✓ Doação direta para a ONG</li>
                  <li style="margin-bottom: 0.5rem;">✓ Transparência total</li>
                  <li>✓ Faça a diferença agora</li>
                </ul>
              </div>
            </div>

            <div class="card" style="padding: 1.5rem;">
              <h2 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                  <polyline points="17 6 23 6 23 12"></polyline>
                </svg>
                Transparência
              </h2>
              
              ${donations.length > 0 ? `
                <p class="text-muted" style="margin-bottom: 1rem;">Últimas doações recebidas:</p>
                ${donations.slice(0, 5).map(donation => `
                  <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.75rem; background: var(--muted); border-radius: var(--radius); margin-bottom: 0.75rem;">
                    <span style="font-weight: 500;">${donation.donorName}</span>
                    <span style="color: var(--primary); font-weight: 700;">${formatCurrency(donation.amount)}</span>
                  </div>
                `).join('')}
              ` : `
                <p class="text-muted">Esta ONG ainda não recebeu doações. Seja o primeiro a doar!</p>
              `}
            </div>
          </div>
        </div>
      `;
}
