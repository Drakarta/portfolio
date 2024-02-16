use axum::{routing::get, Router};

use std::net::SocketAddr;

#[tokio::main]
async fn main() {
    let app = Router::new()
        // Root router
        .route("/", get(root));
    let address = SocketAddr::from(([127, 0, 0, 1], 3000));
    println!("Server running on http://{address}",);
    let listener = tokio::net::TcpListener::bind(&address).await.unwrap();
    axum::serve(listener, app).await.unwrap();
}

async fn root() -> &'static str {
    "Hello, World!"
}
