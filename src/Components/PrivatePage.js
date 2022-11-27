
export default function PrivatePage({ children }) {
    const token = localStorage.getItem("juliusWalletToken");

    
    if (token) {
        return (
          <>
            <Header />
            {children}
            <Footer />
          </>
        );
}else{
  return <h1>Carregando</h1>
}
}