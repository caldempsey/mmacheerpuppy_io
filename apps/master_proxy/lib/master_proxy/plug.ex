defmodule MasterProxy.Plug do
  def init(options) do
    options
  end

  def call(conn, _opts) do
    IO.inspect(conn.request_path)
    cond do
      conn.request_path =~ ~r{/host_details} ->
        MmacheerpuppyIoApiWeb.Endpoint.call(conn, [])
      true ->
        MmacheerpuppyIoClientWeb.Endpoint.call(conn, [])
    end
  end
end
