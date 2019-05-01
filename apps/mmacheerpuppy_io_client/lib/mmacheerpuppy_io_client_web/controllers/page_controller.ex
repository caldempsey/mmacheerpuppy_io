defmodule MmacheerpuppyIoClientWeb.PageController do
  use MmacheerpuppyIoClientWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
